
const AdditionAndSubtractionMixin = {
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


const BaseMethodsMixin = {
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


const DifferenceMethodsMixin = {
    diff (secondInstance) {
        let diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());

        const years = Math.floor(diffInSeconds / 31536000); // Constants.DaysOfJalaliYear * 24 * 60 * 60
        diffInSeconds %= 31536000;
        const months = Math.floor(diffInSeconds / 2592000); // 30 * 24 * 60 * 60
        diffInSeconds %= 2592000;
        const days = Math.floor(diffInSeconds / 86400); // 24 * 60 * 60
        diffInSeconds %= 86400;
        const hours = Math.floor(diffInSeconds / 3600); // 60 * 60
        diffInSeconds %= 3600;
        const minutes = Math.floor(diffInSeconds / 60);
        diffInSeconds %= 60;
        const seconds = diffInSeconds;

        const diff = {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        return diff;
    },

    diffInSeconds (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());

        return diffInSeconds;
    },

    diffInMinutes (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInMinutes = diffInSeconds > 60 ? Math.floor(diffInSeconds / 60) : 0;

        return diffInMinutes;
    },

    diffInHours (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInHours = diffInSeconds > 3600 ? Math.floor(diffInSeconds / 3600) : 0;

        return diffInHours;
    },

    diffInDays (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInDays = diffInSeconds > 86400 ? Math.floor(diffInSeconds / 86400) : 0;

        return diffInDays;
    },

    diffInMonths (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInMonths = diffInSeconds > 2592000 ? Math.floor(diffInSeconds / 2592000) : 0;

        return diffInMonths;
    },

    diffInYears (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInYears = diffInSeconds > 31536000 ? Math.floor(diffInSeconds / 31536000) : 0;

        return diffInYears;
    }
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
		this._timestamp = timestamp || Math.floor(date.getTime() / 1000); // millisecond to seconds
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
Object.assign(CalendarManager.prototype, DifferenceMethodsMixin);


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
        const daysInMonth = this.daysInMonth(year, month);
        let dayOfYear = day;
        let julianDay = 0;

        if(day > daysInMonth) {
            dayOfYear = day - daysInMonth;
            year = month === 12 ? year + 1 : year;
            month = month === 12 ? 1 : month + 1;
        }

        for (let m = 1; m < month; m++) {
            dayOfYear += this.daysInMonth(year, m);
        }

        julianDay += dayOfYear;
        julianDay += (year - 1) * Constants.DaysOfShiaYear;
        julianDay += Math.floor(((11 * year) + 3) / 30);
        julianDay += this.ShiaEpoch - (year === 1440 ? 2 : 1);
		return this.addTimeToJulianDay(julianDay, hour, minute, second);
	}

    julianDayToDate (julianDay) {
        let time = this.extractJulianDayTime(julianDay);
            
        julianDay = this.julianDayWithoutTime(julianDay);

        let year = Math.floor((((julianDay - this.ShiaEpoch) * 30) + 10646) / 10631);
        let month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);
        let dayOfYear = julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year - 1, 12, this.daysInMonth(year - 1, 12), time.hour, time.minute, time.second));
        let days = 0;

        for (let i = 1; i <= 12; i++) {
            days += this.daysInMonth(year, i);
            if (dayOfYear <= days) {
                month = i;
                break;
            }
        }

        // let day = (julianDay - ((days - this.daysInMonth(year, month)) + ((year - 1) * 354) + Math.floor((3 + (11 * year)) / 30) + this.ShiaEpoch) + 1);
        let day = dayOfYear - (days - this.daysInMonth(year, month));
        
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

Constants.J1970 = 2440587.5; // Julian date at Unix epoch: 1970-01-01
Constants.DayInSecond = 86400;
Constants.ShiaEpoch = 1948439.5;
Constants.JalaliEpoch = 1948320.5;
Constants.GregorianEpoch = 1721425.5;
Constants.IslamicEpoch = 1948439.5;
Constants.DaysOfIslamicYear = 354;
Constants.DaysOfShiaYear = 354;
Constants.DaysOfJalaliYear = 365;
Constants.DaysOfGaregorianYear = 365;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9taXhpbi9BZGRpdGlvbkFuZFN1YnN0cmFjdGlvbk1peGluLmpzIiwic3JjL21peGluL0Jhc2VNZXRob2RzTWl4aW4uanMiLCJzcmMvbWl4aW4vRGlmZmVyZW5jZU1ldGhvZHNNaXhpbi5qcyIsInNyYy9jYWxlbmRhci9DYWxlbmRhci5qcyIsInNyYy9jYWxlbmRhci9DYWxlbmRhck1hbmFnZXIuanMiLCJzcmMvY2FsZW5kYXIvR3JlZ29yaWFuQ2FsZW5kYXIuanMiLCJzcmMvY2FsZW5kYXIvSXNsYW1pY0NhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL0phbGFsaUNhbGVuZGFyLmpzIiwic3JjL2NhbGVuZGFyL1NoaWFDYWxlbmRhci5qcyIsInNyYy9mb3JtYXR0ZXIvRGF0ZUZvcm1hdC5qcyIsInNyYy9mb3JtYXR0ZXIvU2ltcGxlRGF0ZUZvcm1hdC5qcyIsInNyYy9Db25zdGFudHMuanMiLCJzcmMvTG9jYWxpemF0aW9uLmpzIiwic3JjL1Bhc29vbmF0ZS5qcyIsInNyYy9sYW5nL2ZhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwYXNvb25hdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgQWRkaXRpb25BbmRTdWJ0cmFjdGlvbk1peGluID0ge1xyXG5cdGFkZFllYXIoY291bnQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIgKyBjb3VudCwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0YWRkTW9udGgoY291bnQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdG90YWxNb250aCA9IGRhdGUubW9udGggKyBjb3VudDtcclxuXHRcdGxldCB5ZWFyID0gZGF0ZS55ZWFyICsgTWF0aC5mbG9vcih0b3RhbE1vbnRoIC8gMTIpO1xyXG5cdFx0bGV0IG1vbnRoID0gdG90YWxNb250aCAlIDEyO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGFkZERheShjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDg2NDAwKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGFkZEhvdXIoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCArPSAoY291bnQgKiAzNjAwKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGFkZE1pbnV0ZShjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IChjb3VudCAqIDYwKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGFkZFNlY29uZChjb3VudCkge1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wICs9IGNvdW50O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0c3ViWWVhcihjb3VudCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciAtIGNvdW50LCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzdWJNb250aChjb3VudCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0b3RhbE1vbnRoID0gZGF0ZS5tb250aCAtIGNvdW50O1xyXG5cdFx0bGV0IHllYXIgPSBkYXRlLnllYXI7XHJcblx0XHRsZXQgbW9udGggPSB0b3RhbE1vbnRoO1xyXG5cclxuXHRcdGlmKHRvdGFsTW9udGggPD0gMCkge1xyXG5cdFx0XHR0b3RhbE1vbnRoID0gLXRvdGFsTW9udGg7XHJcblx0XHRcdHllYXIgLT0gTWF0aC5mbG9vcih0b3RhbE1vbnRoIC8gMTIpICsgMTtcclxuXHRcdFx0bW9udGggPSAxMiAtICh0b3RhbE1vbnRoICUgMTIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIG1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzdWJEYXkoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCAtPSAoY291bnQgKiA4NjQwMCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzdWJIb3VyKGNvdW50KSB7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgLT0gKGNvdW50ICogMzYwMCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzdWJNaW51dGUoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCAtPSAoY291bnQgKiA2MCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzdWJTZWNvbmQoY291bnQpIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCAtPSBjb3VudDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufTtcclxuIiwiXHJcbmNvbnN0IEJhc2VNZXRob2RzTWl4aW4gPSB7XHJcblx0c2V0VGltZXN0YW1wICh0aW1lc3RhbXApIHtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRUaW1lc3RhbXAgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWVzdGFtcDtcclxuXHR9LFxyXG5cclxuXHRzZXRUaW1lem9uZU9mZnNldCAodGltZXpvbmVPZmZzZXQpIHtcclxuXHRcdHRoaXMuX3RpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0VGltZXpvbmVPZmZzZXQgKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdH0sXHJcblxyXG5cdHNldFllYXIgKHllYXIpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRnZXRZZWFyICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xyXG5cdH0sXHRcclxuXHJcblx0c2V0TW9udGggKG1vbnRoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBtb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0TW9udGggKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdHJldHVybiBkYXRlLm1vbnRoO1xyXG5cdH0sXHJcblxyXG5cdHNldERheSAoZGF5KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXksIGRhdGUuaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0RGF5ICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcclxuXHR9LFxyXG5cclxuXHRzZXRIb3VyIChob3VyKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0SG91ciAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUuaG91cjtcclxuXHR9LFxyXG5cclxuXHRzZXRNaW51dGUgKG1pbnV0ZSkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGRhdGUuaG91ciwgbWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cdGdldE1pbnV0ZSAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0cmV0dXJuIGRhdGUubWludXRlO1xyXG5cdH0sXHJcblxyXG5cdHNldFNlY29uZCAoc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcCAtIHRoaXMuX3RpbWV6b25lT2Zmc2V0O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0U2Vjb25kICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5zZWNvbmQ7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDWWVhciAoeWVhcikge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKHllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ1llYXIgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS55ZWFyO1xyXG5cdH0sXHJcblxyXG5cdHNldFVUQ01vbnRoIChtb250aCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgbW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdFxyXG5cdGdldFVUQ01vbnRoICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUubW9udGg7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDRGF5IChkYXkpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENEYXkgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5kYXk7XHRcclxuXHR9LFxyXG5cclxuXHRzZXRVVENIb3VyIChob3VyKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSwgaG91ciwgZGF0ZS5taW51dGUsIGRhdGUuc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0VVRDSG91ciAoKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHJldHVybiBkYXRlLmhvdXI7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDTWludXRlIChtaW51dGUpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIG1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRnZXRVVENNaW51dGUgKCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHRyZXR1cm4gZGF0ZS5taW51dGU7XHJcblx0fSxcclxuXHJcblx0c2V0VVRDU2Vjb25kIChzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBzZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0Z2V0VVRDU2Vjb25kICgpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXApO1xyXG5cdFx0cmV0dXJuIGRhdGUuc2Vjb25kO1xyXG5cdH0sXHJcblxyXG5cdHNldERhdGUgKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcCh5ZWFyLCBtb250aCwgZGF5LCBkYXRlLmhvdXIsIGRhdGUubWludXRlLCBkYXRlLnNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0VGltZSAoaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBkYXRlID0gdGhpcy5fY3VycmVudENhbGVuZGFyLnRpbWVzdGFtcFRvRGF0ZSh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcblx0XHRsZXQgdGltZXN0YW1wID0gdGhpcy5fY3VycmVudENhbGVuZGFyLmRhdGVUb1RpbWVzdGFtcChkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgLSB0aGlzLl90aW1lem9uZU9mZnNldDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG5cdFx0bGV0IHRpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0dGhpcy5fdGltZXN0YW1wID0gdGltZXN0YW1wIC0gdGhpcy5fdGltZXpvbmVPZmZzZXQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHRzZXRVVENEYXRlICh5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgZGF0ZS5ob3VyLCBkYXRlLm1pbnV0ZSwgZGF0ZS5zZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRcclxuXHRzZXRVVENUaW1lIChob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIudGltZXN0YW1wVG9EYXRlKHRoaXMuX3RpbWVzdGFtcCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF0ZVRvVGltZXN0YW1wKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0VVRDRGF0ZVRpbWUgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcblx0XHRsZXQgZGF0ZSA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci50aW1lc3RhbXBUb0RhdGUodGhpcy5fdGltZXN0YW1wKTtcclxuXHRcdHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N1cnJlbnRDYWxlbmRhci5kYXRlVG9UaW1lc3RhbXAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0ZGF5T2ZXZWVrICgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50Q2FsZW5kYXIuZGF5T2ZXZWVrKHRoaXMuX3RpbWVzdGFtcCArIHRoaXMuX3RpbWV6b25lT2Zmc2V0KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGF5T2ZZZWFyICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLmRheU9mWWVhcih0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdlZWtPZk1vbnRoICgpIHtcclxuICAgIFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxlbmRhci53ZWVrT2ZNb250aCh0aGlzLl90aW1lc3RhbXAgKyB0aGlzLl90aW1lem9uZU9mZnNldCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdlZWtPZlllYXIgKCkge1xyXG4gICAgXHRyZXR1cm4gdGhpcy5fY3VycmVudENhbGVuZGFyLndlZWtPZlllYXIodGhpcy5fdGltZXN0YW1wICsgdGhpcy5fdGltZXpvbmVPZmZzZXQpO1xyXG4gICAgfSxcclxufTtcclxuIiwiXHJcbmNvbnN0IERpZmZlcmVuY2VNZXRob2RzTWl4aW4gPSB7XHJcbiAgICBkaWZmIChzZWNvbmRJbnN0YW5jZSkge1xyXG4gICAgICAgIGxldCBkaWZmSW5TZWNvbmRzID0gTWF0aC5hYnModGhpcy5nZXRUaW1lc3RhbXAoKSAtIHNlY29uZEluc3RhbmNlLmdldFRpbWVzdGFtcCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBNYXRoLmZsb29yKGRpZmZJblNlY29uZHMgLyAzMTUzNjAwMCk7IC8vIENvbnN0YW50cy5EYXlzT2ZKYWxhbGlZZWFyICogMjQgKiA2MCAqIDYwXHJcbiAgICAgICAgZGlmZkluU2Vjb25kcyAlPSAzMTUzNjAwMDtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBNYXRoLmZsb29yKGRpZmZJblNlY29uZHMgLyAyNTkyMDAwKTsgLy8gMzAgKiAyNCAqIDYwICogNjBcclxuICAgICAgICBkaWZmSW5TZWNvbmRzICU9IDI1OTIwMDA7XHJcbiAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZkluU2Vjb25kcyAvIDg2NDAwKTsgLy8gMjQgKiA2MCAqIDYwXHJcbiAgICAgICAgZGlmZkluU2Vjb25kcyAlPSA4NjQwMDtcclxuICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZGlmZkluU2Vjb25kcyAvIDM2MDApOyAvLyA2MCAqIDYwXHJcbiAgICAgICAgZGlmZkluU2Vjb25kcyAlPSAzNjAwO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmZJblNlY29uZHMgLyA2MCk7XHJcbiAgICAgICAgZGlmZkluU2Vjb25kcyAlPSA2MDtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gZGlmZkluU2Vjb25kcztcclxuXHJcbiAgICAgICAgY29uc3QgZGlmZiA9IHtcclxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxyXG4gICAgICAgICAgICBtb250aHM6IG1vbnRocyxcclxuICAgICAgICAgICAgZGF5czogZGF5cyxcclxuICAgICAgICAgICAgaG91cnM6IGhvdXJzLFxyXG4gICAgICAgICAgICBtaW51dGVzOiBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmRzOiBzZWNvbmRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpZmZJblNlY29uZHMgKHNlY29uZEluc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguYWJzKHRoaXMuZ2V0VGltZXN0YW1wKCkgLSBzZWNvbmRJbnN0YW5jZS5nZXRUaW1lc3RhbXAoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaWZmSW5TZWNvbmRzO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWZmSW5NaW51dGVzIChzZWNvbmRJbnN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGRpZmZJblNlY29uZHMgPSBNYXRoLmFicyh0aGlzLmdldFRpbWVzdGFtcCgpIC0gc2Vjb25kSW5zdGFuY2UuZ2V0VGltZXN0YW1wKCkpO1xyXG4gICAgICAgIGNvbnN0IGRpZmZJbk1pbnV0ZXMgPSBkaWZmSW5TZWNvbmRzID4gNjAgPyBNYXRoLmZsb29yKGRpZmZJblNlY29uZHMgLyA2MCkgOiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlmZkluTWludXRlcztcclxuICAgIH0sXHJcblxyXG4gICAgZGlmZkluSG91cnMgKHNlY29uZEluc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguYWJzKHRoaXMuZ2V0VGltZXN0YW1wKCkgLSBzZWNvbmRJbnN0YW5jZS5nZXRUaW1lc3RhbXAoKSk7XHJcbiAgICAgICAgY29uc3QgZGlmZkluSG91cnMgPSBkaWZmSW5TZWNvbmRzID4gMzYwMCA/IE1hdGguZmxvb3IoZGlmZkluU2Vjb25kcyAvIDM2MDApIDogMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpZmZJbkhvdXJzO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWZmSW5EYXlzIChzZWNvbmRJbnN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGRpZmZJblNlY29uZHMgPSBNYXRoLmFicyh0aGlzLmdldFRpbWVzdGFtcCgpIC0gc2Vjb25kSW5zdGFuY2UuZ2V0VGltZXN0YW1wKCkpO1xyXG4gICAgICAgIGNvbnN0IGRpZmZJbkRheXMgPSBkaWZmSW5TZWNvbmRzID4gODY0MDAgPyBNYXRoLmZsb29yKGRpZmZJblNlY29uZHMgLyA4NjQwMCkgOiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlmZkluRGF5cztcclxuICAgIH0sXHJcblxyXG4gICAgZGlmZkluTW9udGhzIChzZWNvbmRJbnN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGRpZmZJblNlY29uZHMgPSBNYXRoLmFicyh0aGlzLmdldFRpbWVzdGFtcCgpIC0gc2Vjb25kSW5zdGFuY2UuZ2V0VGltZXN0YW1wKCkpO1xyXG4gICAgICAgIGNvbnN0IGRpZmZJbk1vbnRocyA9IGRpZmZJblNlY29uZHMgPiAyNTkyMDAwID8gTWF0aC5mbG9vcihkaWZmSW5TZWNvbmRzIC8gMjU5MjAwMCkgOiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlmZkluTW9udGhzO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaWZmSW5ZZWFycyAoc2Vjb25kSW5zdGFuY2UpIHtcclxuICAgICAgICBjb25zdCBkaWZmSW5TZWNvbmRzID0gTWF0aC5hYnModGhpcy5nZXRUaW1lc3RhbXAoKSAtIHNlY29uZEluc3RhbmNlLmdldFRpbWVzdGFtcCgpKTtcclxuICAgICAgICBjb25zdCBkaWZmSW5ZZWFycyA9IGRpZmZJblNlY29uZHMgPiAzMTUzNjAwMCA/IE1hdGguZmxvb3IoZGlmZkluU2Vjb25kcyAvIDMxNTM2MDAwKSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBkaWZmSW5ZZWFycztcclxuICAgIH1cclxufTtcclxuIiwiXHJcbmNsYXNzIENhbGVuZGFyIHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0XHR0aGlzLkoxOTcwID0gMjQ0MDU4Ny41O1x0XHRcdC8vIEp1bGlhbiBkYXRlIGF0IFVuaXggZXBvY2g6IDE5NzAtMDEtMDFcclxuXHRcdHRoaXMuRGF5SW5TZWNvbmQgPSA4NjQwMDtcclxuXHR9XHRcclxuXHJcblx0dGltZXN0YW1wVG9KdWxpYW5EYXkgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSAgdGltZXN0YW1wIC8gdGhpcy5EYXlJblNlY29uZCArIHRoaXMuSjE5NzA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGp1bGlhbkRheUZsb2F0Um91bmRlZCA9IE1hdGgucm91bmQoKGp1bGlhbkRheSAtIE1hdGguZmxvb3IoanVsaWFuRGF5KSkgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoanVsaWFuRGF5KSArIGp1bGlhbkRheUZsb2F0Um91bmRlZDtcclxuXHR9XHJcblxyXG5cdGp1bGlhbkRheVRvVGltZXN0YW1wIChqdWxpYW5EYXkpIHtcclxuXHRcdGxldCB0aW1lc3RhbXAgPSBNYXRoLnJvdW5kKChqdWxpYW5EYXkgLSB0aGlzLkoxOTcwKSAqIHRoaXMuRGF5SW5TZWNvbmQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGltZXN0YW1wO1xyXG4gICAgfVxyXG5cclxuXHRqdWxpYW5EYXlXaXRob3V0VGltZSAoanVsaWFuRGF5KSB7XHJcblx0XHRcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAoKGp1bGlhbkRheSAtIE1hdGguZmxvb3IoanVsaWFuRGF5KSkgPj0gMC41ID8gIDAuNSA6IC0wLjUpO1xyXG5cdH1cclxuXHJcblx0ZXh0cmFjdEp1bGlhbkRheVRpbWUgKGp1bGlhbkRheSkge1xyXG4gICAgICAgIGp1bGlhbkRheSArPSAwLjU7XHJcblxyXG4gICAgICAgIC8vIEFzdHJvbm9taWNhbCB0byBjaXZpbFxyXG4gICAgICAgIGxldCB0aW1lID0gTWF0aC5mbG9vcigoanVsaWFuRGF5IC0gTWF0aC5mbG9vcihqdWxpYW5EYXkpKSAqIHRoaXMuRGF5SW5TZWNvbmQpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIFx0XCJob3VyXCI6IE1hdGguZmxvb3IodGltZSAvIDM2MDApLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogTWF0aC5mbG9vcigodGltZSAvIDYwKSAlIDYwKSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IE1hdGguZmxvb3IodGltZSAlIDYwKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGltZVRvSnVsaWFuRGF5IChqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcbiAgICBcdGxldCB0aW1lc3RhbXAgPSB0aGlzLmp1bGlhbkRheVRvVGltZXN0YW1wKGp1bGlhbkRheSk7XHJcbiAgICBcdHRpbWVzdGFtcCArPSAoaG91ciAqIDM2MDApICsgKG1pbnV0ZSAqIDYwKSArIHNlY29uZDtcclxuXHJcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy50aW1lc3RhbXBUb0p1bGlhbkRheSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXlGbG9hdFJvdW5kZWQgPSBNYXRoLnJvdW5kKChqdWxpYW5EYXkgLSBNYXRoLmZsb29yKGp1bGlhbkRheSkpICogMTAwMDAwMDApIC8gMTAwMDAwMDA7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyBqdWxpYW5EYXlGbG9hdFJvdW5kZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgZGF0ZVRvVGltZXN0YW1wICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5qdWxpYW5EYXlUb1RpbWVzdGFtcChqdWxpYW5EYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGp1bGlhbkRheVRvRGF0ZSAoanVsaWFuRGF5KSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICB0aW1lc3RhbXBUb0RhdGUgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSB0aGlzLnRpbWVzdGFtcFRvSnVsaWFuRGF5KHRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmp1bGlhbkRheVRvRGF0ZShqdWxpYW5EYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoICh5ZWFyLCBtb250aCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRheU9mV2VlayAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IHRoaXMudGltZXN0YW1wVG9KdWxpYW5EYXkodGltZXN0YW1wKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2QoTWF0aC5mbG9vcigoanVsaWFuRGF5ICsgMi41KSksIDcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRheU9mWWVhciAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gdGhpcy50aW1lc3RhbXBUb0RhdGUodGltZXN0YW1wKTtcclxuICAgICAgICBsZXQgZmlyc3RPZlllYXJKdWxpYW5EYXkgPSB0aGlzLmRhdGVUb0p1bGlhbkRheShjdXJyZW50RGF0ZS55ZWFyLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICBsZXQgY3VycmVudEp1bGlhbkRheSA9IHRoaXMuZGF0ZVRvSnVsaWFuRGF5KGN1cnJlbnREYXRlLnllYXIsIGN1cnJlbnREYXRlLm1vbnRoLCBjdXJyZW50RGF0ZS5kYXksIGN1cnJlbnREYXRlLmhvdXIsIGN1cnJlbnREYXRlLm1pbnV0ZSwgY3VycmVudERhdGUuc2Vjb25kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY3VycmVudEp1bGlhbkRheSAtIGZpcnN0T2ZZZWFySnVsaWFuRGF5ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2Vla09mTW9udGggKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZNb250aFRpbWVzdGFtcCA9IHRoaXMuZGF0ZVRvVGltZXN0YW1wKGN1cnJlbnREYXRlLnllYXIsIGN1cnJlbnREYXRlLm1vbnRoLCAxLCBjdXJyZW50RGF0ZS5ob3VyLCBjdXJyZW50RGF0ZS5taW51dGUsIGN1cnJlbnREYXRlLnNlY29uZCk7XHJcbiAgICAgICAgbGV0IGRheU9mV2Vla0luQ3VycmVudERheU9mTW9udGggPSB0aGlzLmRheU9mV2Vlayh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCA9IHRoaXMuZGF5T2ZXZWVrKGZpcnN0RGF5T2ZNb250aFRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIGxldCB3ZWVrID0gMTtcclxuXHJcbiAgICAgICAgaWYoY3VycmVudERhdGUuZGF5IDw9IDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2VlaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdlZWsgKz0gKChjdXJyZW50RGF0ZS5kYXkgLSAoKDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZNb250aCkgKyAoZGF5T2ZXZWVrSW5DdXJyZW50RGF5T2ZNb250aCArIDEpKSkgLyA3KSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiB3ZWVrO1xyXG4gICAgfVxyXG5cclxuICAgIHdlZWtPZlllYXIgKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IHRoaXMudGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGRheU9mWWVhciA9IHRoaXMuZGF5T2ZZZWFyKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGZpcnN0RGF5T2ZZZWFyVGltZXN0YW1wID0gdGhpcy5kYXRlVG9UaW1lc3RhbXAoY3VycmVudERhdGUueWVhciwgMSwgMSwgY3VycmVudERhdGUuaG91ciwgY3VycmVudERhdGUubWludXRlLCBjdXJyZW50RGF0ZS5zZWNvbmQpO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkN1cnJlbnREYXlPZlllYXIgPSB0aGlzLmRheU9mV2Vlayh0aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBkYXlPZldlZWtJbkZpcnN0RGF5T2ZZZWFyID0gdGhpcy5kYXlPZldlZWsoZmlyc3REYXlPZlllYXJUaW1lc3RhbXApO1xyXG5cclxuICAgICAgICBsZXQgd2VlayA9IDE7XHJcblxyXG4gICAgICAgIGlmKGRheU9mWWVhciA8PSA3IC0gZGF5T2ZXZWVrSW5GaXJzdERheU9mWWVhcikge1xyXG4gICAgICAgICAgICByZXR1cm4gd2VlaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdlZWsgKz0gKChkYXlPZlllYXIgLSAoKDcgLSBkYXlPZldlZWtJbkZpcnN0RGF5T2ZZZWFyKSArIChkYXlPZldlZWtJbkN1cnJlbnREYXlPZlllYXIgKyAxKSkpIC8gNykgKyAxO1xyXG5cclxuICAgICAgICByZXR1cm4gd2VlazsgICBcclxuICAgIH1cclxuXHJcbiAgICBtb2QgKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSAtIChiICogTWF0aC5mbG9vcihhIC8gYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5jbGFzcyBDYWxlbmRhck1hbmFnZXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XHJcblx0XHR0aGlzLl9ncmVnb3JpYW4gPSBuZXcgR3JlZ29yaWFuQ2FsZW5kYXIoKTtcdFxyXG5cdFx0dGhpcy5famFsYWxpID0gbmV3IEphbGFsaUNhbGVuZGFyKCk7XHRcclxuXHRcdHRoaXMuX2lzbGFtaWMgPSBuZXcgSXNsYW1pY0NhbGVuZGFyKCk7XHRcclxuXHRcdHRoaXMuX3NoaWEgPSBuZXcgU2hpYUNhbGVuZGFyKCk7XHJcblx0XHR0aGlzLl9jdXJyZW50Q2FsZW5kYXIgPSBudWxsO1xyXG5cdFx0dGhpcy5fZm9ybWF0dGVyID0gUGFzb29uYXRlLmZvcm1hdHRlcjtcclxuXHJcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHR0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApOyAvLyBtaWxsaXNlY29uZCB0byBzZWNvbmRzXHJcblx0XHR0aGlzLl90aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0ICE9PSB1bmRlZmluZWQgfHwgLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwOyAvLyBtaW51dGUgKiA2MCA9IG9mZnNldCBpbiBzZWNvbmRzXHJcblx0fVxyXG5cclxuXHRncmVnb3JpYW4gKCkge1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5fZ3JlZ29yaWFuO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRqYWxhbGkgKCkge1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5famFsYWxpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRpc2xhbWljICgpIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRDYWxlbmRhciA9IHRoaXMuX2lzbGFtaWM7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHNoaWEgKCkge1xyXG5cdFx0dGhpcy5fY3VycmVudENhbGVuZGFyID0gdGhpcy5fc2hpYTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0IChwYXR0ZXJuLCBsb2NhbGUpIHtcclxuXHRcdHRoaXMuX2Zvcm1hdHRlci5zZXRDYWxlbmRhcih0aGlzKTtcclxuXHRcdHJldHVybiB0aGlzLl9mb3JtYXR0ZXIuZm9ybWF0KHBhdHRlcm4sIGxvY2FsZSk7XHJcblx0fVx0XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQmFzZU1ldGhvZHNNaXhpbik7XHJcbk9iamVjdC5hc3NpZ24oQ2FsZW5kYXJNYW5hZ2VyLnByb3RvdHlwZSwgQWRkaXRpb25BbmRTdWJ0cmFjdGlvbk1peGluKTtcclxuT2JqZWN0LmFzc2lnbihDYWxlbmRhck1hbmFnZXIucHJvdG90eXBlLCBEaWZmZXJlbmNlTWV0aG9kc01peGluKTtcclxuIiwiXHJcbmNsYXNzIEdyZWdvcmlhbkNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHN1cGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5HcmVnb3JpYW5FcG9jaCA9IDE3MjE0MjUuNTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ0dyZWdvcmlhbkVwb2NoJywge1xyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGRhdGVUb0p1bGlhbkRheSAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcclxuXHRcdGxldCBqdWxpYW5EYXkgPSB0aGlzLkdyZWdvcmlhbkVwb2NoIC0gMTtcclxuXHJcblx0XHRqdWxpYW5EYXkgKz0gMzY1ICogKHllYXIgLSAxKTtcclxuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KTtcclxuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICogLTE7XHJcblx0XHRqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKTtcclxuXHRcdGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoKDM2NyAqIG1vbnRoKSAtIDM2MikgLyAxMikgKyAoKG1vbnRoIDw9IDIpID8gMCA6ICh0aGlzLmlzTGVhcCh5ZWFyKSA/IC0xIDogLTIpKSArIGRheSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgIFx0XHJcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuXHJcbiAgICBcdGxldCB3amQgPSBNYXRoLmZsb29yKGp1bGlhbkRheSAtIDAuNSkgKyAwLjU7XHJcbiAgICAgICAgbGV0IGRlcG9jaCA9IHdqZCAtIHRoaXMuR3JlZ29yaWFuRXBvY2g7XHJcbiAgICAgICAgbGV0IHF1YWRyaWNlbnQgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDE0NjA5Nyk7XHJcbiAgICAgICAgbGV0IGRxYyA9IHRoaXMubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuICAgICAgICBsZXQgY2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG4gICAgICAgIGxldCBkY2VudCA9IHRoaXMubW9kKGRxYywgMzY1MjQpO1xyXG4gICAgICAgIGxldCBxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xyXG4gICAgICAgIGxldCBkcXVhZCA9IHRoaXMubW9kKGRjZW50LCAxNDYxKTtcclxuICAgICAgICBsZXQgeWluZGV4ID0gTWF0aC5mbG9vcihkcXVhZCAvIDM2NSk7XHJcbiAgICAgICAgbGV0IHllYXIgPSAocXVhZHJpY2VudCAqIDQwMCkgKyAoY2VudCAqIDEwMCkgKyAocXVhZCAqIDQpICsgeWluZGV4O1xyXG4gICAgICAgIGlmICghKChjZW50ID09IDQpIHx8ICh5aW5kZXggPT0gNCkpKSB7XHJcbiAgICAgICAgICAgIHllYXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHllYXJkYXkgPSB3amQgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSk7XHJcbiAgICAgICAgbGV0IGxlYXBhZGogPSAod2pkIDwgdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAzLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpID8gMCA6ICh0aGlzLmlzTGVhcCh5ZWFyKSA/IDEgOiAyKSk7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gTWF0aC5mbG9vcigoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMikgKyAzNzMpIC8gMzY3KTtcclxuICAgICAgICBsZXQgZGF5ID0gKHdqZCAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgbW9udGgsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxyXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcclxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcclxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXHJcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFeGNlcHRpb24oXCIkbW9udGggT3V0IE9mIFJhbmdlIEV4Y2VwdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHllYXIgJiYgdGhpcy5pc0xlYXAoeWVhcikgJiYgbW9udGggPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIHJldHVybiAoKHllYXIgJSA0KSA9PSAwKSAmJiAoISgoKHllYXIgJSAxMDApID09IDApICYmICgoeWVhciAlIDQwMCkgIT0gMCkpKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgSXNsYW1pY0NhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5Jc2xhbWljRXBvY2ggPSAxOTQ4NDM5LjU7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ0lzbGFtaWNFcG9jaCcsIHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcbiAgICAgICAgbGV0IGp1bGlhbkRheSA9IGRheTtcclxuXHJcbiAgICAgICAganVsaWFuRGF5ICs9IE1hdGguY2VpbCgobW9udGggLSAxKSAqIDI5LjUpO1xyXG4gICAgICAgIGp1bGlhbkRheSArPSAoeWVhciAtIDEpICogMzU0O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoMTEgKiB5ZWFyKSArIDMpIC8gMzApO1xyXG4gICAgICAgIGp1bGlhbkRheSArPSB0aGlzLklzbGFtaWNFcG9jaCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5leHRyYWN0SnVsaWFuRGF5VGltZShqdWxpYW5EYXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuICAgICAgICBqdWxpYW5EYXkgPSBNYXRoLmZsb29yKGp1bGlhbkRheSkgKyAwLjU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHllYXIgPSBNYXRoLmZsb29yKCgoKGp1bGlhbkRheSAtIHRoaXMuSXNsYW1pY0Vwb2NoKSAqIDMwKSArIDEwNjQ2KSAvIDEwNjMxKTtcclxuICAgICAgICBsZXQgbW9udGggPSBNYXRoLm1pbigxMiwgTWF0aC5jZWlsKChqdWxpYW5EYXkgLSAoMjkgKyB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIDEsIDEsIHRpbWUuaG91ciwgdGltZS5taW51dGUsIHRpbWUuc2Vjb25kKSkpKSAvIDI5LjUpICsgMSk7XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGlzbGFtaWNEYXlzSW5Nb250aCA9IFszMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5XTsgLy8zMFxyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXhjZXB0aW9uKFwiJG1vbnRoIE91dCBPZiBSYW5nZSBFeGNlcHRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh5ZWFyICYmIHRoaXMuaXNMZWFwKHllYXIpICYmIG1vbnRoID09IDEyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGlzbGFtaWNEYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIGxldCBpc0xlYXAgPSAoKCh5ZWFyICogMTEpICsgMTQpICUgMzApIDwgMTE7XHJcbiAgICAgICAgcmV0dXJuIGlzTGVhcDtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgSmFsYWxpQ2FsZW5kYXIgZXh0ZW5kcyBDYWxlbmRhciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5KYWxhbGlFcG9jaCA9IDE5NDgzMjAuNTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnSmFsYWxpRXBvY2gnLCB7XHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0ZGF0ZVRvSnVsaWFuRGF5ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xyXG5cdFx0bGV0IGVwb2NoQmFzZSA9IHllYXIgLSAoeWVhciA+PSAwID8gNDc0IDogNDczKTtcclxuICAgICAgICBsZXQgZXBvY2hZZWFyID0gNDc0ICsgdGhpcy5tb2QoZXBvY2hCYXNlLCAyODIwKTtcclxuICAgICAgICBsZXQganVsaWFuRGF5ID0gZGF5O1xyXG5cclxuICAgICAgICBqdWxpYW5EYXkgKz0gbW9udGggPD0gNyA/IChtb250aCAtIDEpICogMzEgOiAoKG1vbnRoIC0gMSkgKiAzMCkgKyA2O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKCgoZXBvY2hZZWFyICogNjgyKSAtIDExMCkgLyAyODE2KTtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gKGVwb2NoWWVhciAtIDEpICogMzY1O1xyXG4gICAgICAgIGp1bGlhbkRheSArPSBNYXRoLmZsb29yKGVwb2NoQmFzZSAvIDI4MjApICogMTAyOTk4MztcclxuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5KYWxhbGlFcG9jaCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkVGltZVRvSnVsaWFuRGF5KGp1bGlhbkRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpO1xyXG5cdH1cclxuXHJcbiAgICBqdWxpYW5EYXlUb0RhdGUgKGp1bGlhbkRheSkge1xyXG4gICAgXHRsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgIFx0XHJcbiAgICBcdGp1bGlhbkRheSA9IHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUoanVsaWFuRGF5KTtcclxuXHJcbiAgICBcdGp1bGlhbkRheSA9IE1hdGguZmxvb3IoanVsaWFuRGF5KSArIDAuNTtcclxuXHJcbiAgICAgICAgbGV0IGRlcG9jaCA9IGp1bGlhbkRheSAtIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoNDc1LCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpO1xyXG4gICAgICAgIGxldCBjeWNsZSA9IE1hdGguZmxvb3IoZGVwb2NoIC8gMTAyOTk4Myk7XHJcbiAgICAgICAgbGV0IGN5ZWFyID0gdGhpcy5tb2QoZGVwb2NoLCAxMDI5OTgzKTsgICAgICAgIFxyXG4gICAgXHRsZXQgeWN5Y2xlLCBhdXgxLCBhdXgyO1xyXG5cclxuICAgICAgICBpZiAoY3llYXIgPT0gMTAyOTk4Mikge1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSAyODIwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuICAgICAgICAgICAgYXV4MiA9IHRoaXMubW9kKGN5ZWFyLCAzNjYpO1xyXG4gICAgICAgICAgICB5Y3ljbGUgPSBNYXRoLmZsb29yKCgoMjEzNCAqIGF1eDEpICsgKDI4MTYgKiBhdXgyKSArIDI4MTUpIC8gMTAyODUyMikgKyBhdXgxICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHllYXIgPSB5Y3ljbGUgKyAoMjgyMCAqIGN5Y2xlKSArIDQ3NDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHllYXItLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHlkYXkgPSAoanVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyLCAxLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gKHlkYXkgPD0gMTg2KSA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcbiAgICAgICAgbGV0IGRheSA9IChqdWxpYW5EYXkgLSB0aGlzLmp1bGlhbkRheVdpdGhvdXRUaW1lKHRoaXMuZGF0ZVRvSnVsaWFuRGF5KHllYXIsIG1vbnRoLCAxLCB0aW1lLmhvdXIsIHRpbWUubWludXRlLCB0aW1lLnNlY29uZCkpKSArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgXHRcInllYXJcIjogeWVhcixcclxuICAgICAgICBcdFwibW9udGhcIjogbW9udGgsXHJcbiAgICAgICAgXHRcImRheVwiOiBkYXksXHJcbiAgICAgICAgXHRcImhvdXJcIjogdGltZS5ob3VyLFxyXG4gICAgICAgIFx0XCJtaW51dGVcIjogdGltZS5taW51dGUsXHJcbiAgICAgICAgXHRcInNlY29uZFwiOiB0aW1lLnNlY29uZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGggKHllYXIsIG1vbnRoKSB7XHJcbiAgICAgICAgbGV0IGdyZWdvcmlhbkRheXNJbk1vbnRoID0gWzMxLCAzMSwgMzEsIDMxLCAzMSwgMzEsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMjldOyAvLzMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoeWVhciAmJiB0aGlzLmlzTGVhcCh5ZWFyKSAmJiBtb250aCA9PSAxMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBncmVnb3JpYW5EYXlzSW5Nb250aFttb250aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTGVhcCAoeWVhcikge1xyXG4gICAgICAgIHJldHVybiAoKCgoKCh5ZWFyIC0gKCh5ZWFyID4gMCkgPyA0NzQgOiA0NzMpKSAlIDI4MjApICsgNDc0KSArIDM4KSAqIDY4MikgJSAyODE2KSA8IDY4MjtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgU2hpYUNhbGVuZGFyIGV4dGVuZHMgQ2FsZW5kYXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5TaGlhRXBvY2ggPSAxOTQ4NDM5LjU7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ1NoaWFFcG9jaCcsIHtcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRkYXRlVG9KdWxpYW5EYXkgKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XHJcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIG1vbnRoKTtcclxuICAgICAgICBsZXQgZGF5T2ZZZWFyID0gZGF5O1xyXG4gICAgICAgIGxldCBqdWxpYW5EYXkgPSAwO1xyXG5cclxuICAgICAgICBpZihkYXkgPiBkYXlzSW5Nb250aCkge1xyXG4gICAgICAgICAgICBkYXlPZlllYXIgPSBkYXkgLSBkYXlzSW5Nb250aDtcclxuICAgICAgICAgICAgeWVhciA9IG1vbnRoID09PSAxMiA/IHllYXIgKyAxIDogeWVhcjtcclxuICAgICAgICAgICAgbW9udGggPSBtb250aCA9PT0gMTIgPyAxIDogbW9udGggKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDE7IG0gPCBtb250aDsgbSsrKSB7XHJcbiAgICAgICAgICAgIGRheU9mWWVhciArPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIG0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAganVsaWFuRGF5ICs9IGRheU9mWWVhcjtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gKHllYXIgLSAxKSAqIENvbnN0YW50cy5EYXlzT2ZTaGlhWWVhcjtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gTWF0aC5mbG9vcigoKDExICogeWVhcikgKyAzKSAvIDMwKTtcclxuICAgICAgICBqdWxpYW5EYXkgKz0gdGhpcy5TaGlhRXBvY2ggLSAoeWVhciA9PT0gMTQ0MCA/IDIgOiAxKTtcclxuXHRcdHJldHVybiB0aGlzLmFkZFRpbWVUb0p1bGlhbkRheShqdWxpYW5EYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuXHR9XHJcblxyXG4gICAganVsaWFuRGF5VG9EYXRlIChqdWxpYW5EYXkpIHtcclxuICAgICAgICBsZXQgdGltZSA9IHRoaXMuZXh0cmFjdEp1bGlhbkRheVRpbWUoanVsaWFuRGF5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAganVsaWFuRGF5ID0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZShqdWxpYW5EYXkpO1xyXG5cclxuICAgICAgICBsZXQgeWVhciA9IE1hdGguZmxvb3IoKCgoanVsaWFuRGF5IC0gdGhpcy5TaGlhRXBvY2gpICogMzApICsgMTA2NDYpIC8gMTA2MzEpO1xyXG4gICAgICAgIGxldCBtb250aCA9IE1hdGgubWluKDEyLCBNYXRoLmNlaWwoKGp1bGlhbkRheSAtICgyOSArIHRoaXMuanVsaWFuRGF5V2l0aG91dFRpbWUodGhpcy5kYXRlVG9KdWxpYW5EYXkoeWVhciwgMSwgMSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKSkpIC8gMjkuNSkgKyAxKTtcclxuICAgICAgICBsZXQgZGF5T2ZZZWFyID0ganVsaWFuRGF5IC0gdGhpcy5qdWxpYW5EYXlXaXRob3V0VGltZSh0aGlzLmRhdGVUb0p1bGlhbkRheSh5ZWFyIC0gMSwgMTIsIHRoaXMuZGF5c0luTW9udGgoeWVhciAtIDEsIDEyKSwgdGltZS5ob3VyLCB0aW1lLm1pbnV0ZSwgdGltZS5zZWNvbmQpKTtcclxuICAgICAgICBsZXQgZGF5cyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgZGF5cyArPSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIGkpO1xyXG4gICAgICAgICAgICBpZiAoZGF5T2ZZZWFyIDw9IGRheXMpIHtcclxuICAgICAgICAgICAgICAgIG1vbnRoID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgZGF5ID0gKGp1bGlhbkRheSAtICgoZGF5cyAtIHRoaXMuZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArICgoeWVhciAtIDEpICogMzU0KSArIE1hdGguZmxvb3IoKDMgKyAoMTEgKiB5ZWFyKSkgLyAzMCkgKyB0aGlzLlNoaWFFcG9jaCkgKyAxKTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF5T2ZZZWFyIC0gKGRheXMgLSB0aGlzLmRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcdFwieWVhclwiOiB5ZWFyLFxyXG4gICAgICAgIFx0XCJtb250aFwiOiBtb250aCxcclxuICAgICAgICBcdFwiZGF5XCI6IGRheSxcclxuICAgICAgICBcdFwiaG91clwiOiB0aW1lLmhvdXIsXHJcbiAgICAgICAgXHRcIm1pbnV0ZVwiOiB0aW1lLm1pbnV0ZSxcclxuICAgICAgICBcdFwic2Vjb25kXCI6IHRpbWUuc2Vjb25kLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aCAoeWVhciwgbW9udGgpIHtcclxuIFx0XHRsZXQgaXNsYW1pY0RheXNJbk1vbnRoID0gWzMwLCAyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMjldOyAvLzMwXHJcbiAgICAgICAgbGV0IHNoaWFEYXlzSW5Nb250aEluWWVhcnMgPSB7XHJcbiAgICAgICAgICAgIDE0MzU6IFsyOSwgMzAsIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDMwLCAzMCwgMjksIDMwXSxcclxuICAgICAgICAgICAgMTQzNjogWzI5LCAzMCwgMjksIDI5LCAzMCwgMjksIDMwLCAyOSwgMzAsIDI5LCAzMCwgMzBdLFxyXG4gICAgICAgICAgICAxNDM3OiBbMjksIDMwLCAzMCwgMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMjksIDMwLCAzMF0sXHJcbiAgICAgICAgICAgIDE0Mzg6IFsyOSwgMzAsIDMwLCAzMCwgMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMjksIDMwXSxcclxuICAgICAgICAgICAgMTQzOTogWzI5LCAzMCwgMzAsIDMwLCAzMCwgMjksIDMwLCAyOSwgMjksIDMwLCAyOSwgMjldLFxyXG4gICAgICAgICAgICAxNDQwOiBbMzAsIDI5LCAzMCwgMzAsIDMwLCAyOSwgMjksIDMwLCAyOSwgMzAsIDI5LCAyOV0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUV4Y2VwdGlvbihcIiRtb250aCBPdXQgT2YgUmFuZ2UgRXhjZXB0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNoaWFEYXlzSW5Nb250aEluWWVhcnNbeWVhcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNsYW1pY0RheXNJbk1vbnRoW21vbnRoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hpYURheXNJbk1vbnRoSW5ZZWFyc1t5ZWFyXVttb250aCAtIDFdOyAgIFx0XHJcbiAgICB9XHJcblxyXG4gICAgaXNMZWFwICh5ZWFyKSB7XHJcbiAgICAgICAgbGV0IGlzTGVhcCA9ICgoKHllYXIgKiAxMSkgKyAxNCkgJSAzMCkgPCAxMTtcclxuXHRcdHJldHVybiBpc0xlYXA7XHJcblx0fVxyXG59XHJcbiIsIlxyXG5jbGFzcyBEYXRlRm9ybWF0IHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0XHR0aGlzLl9jYWxlbmRhciA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRzZXRDYWxlbmRhciAoY2FsZW5kYXIpIHtcclxuXHRcdHRoaXMuX2NhbGVuZGFyID0gY2FsZW5kYXIgaW5zdGFuY2VvZiBDYWxlbmRhck1hbmFnZXIgPyBjYWxlbmRhciA6IG51bGw7XHJcblx0fVxyXG5cclxuXHRnZXRDYWxlbmRhciAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2FsZW5kYXI7XHJcblx0fVxyXG5cclxuXHRmb3JtYXQgKCkge1xyXG5cdFx0aWYodGhpcy5nZXRDYWxlbmRhcigpID09PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBgJHt0aGlzLl9jYWxlbmRhci5nZXRZZWFyKCl9LSR7dGhpcy5fY2FsZW5kYXIuZ2V0TW9udGgoKX0tJHt0aGlzLl9jYWxlbmRhci5nZXREYXkoKX0gJHt0aGlzLl9jYWxlbmRhci5nZXRIb3VyKCl9OiR7dGhpcy5fY2FsZW5kYXIuZ2V0TWludXRlKCl9OiR7dGhpcy5fY2FsZW5kYXIuZ2V0U2Vjb25kKCl9YDtcclxuXHR9XHJcbn1cclxuIiwiXHJcbmNsYXNzIFNpbXBsZURhdGVGb3JtYXQgZXh0ZW5kcyBEYXRlRm9ybWF0IHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0IChwYXR0ZXJuLCBsb2NhbGUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBpbGUocGF0dGVybiwgbG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdGNvbXBpbGUgKHBhdHRlcm4sIGxvY2FsZSkge1xyXG5cdFx0cGF0dGVybiA9IFN0cmluZyhwYXR0ZXJuKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCByZXN1bHQgPSBwYXR0ZXJuO1xyXG5cclxuXHRcdGNvbnN0IFNpZ25zID0gWyd5JywgJ20nLCAnZCddO1xyXG5cdFx0Y29uc3QgRnVsbFllYXIgPSAneXl5eSc7XHJcblx0XHRjb25zdCBTaG9ydFllYXIgPSAneXknO1xyXG5cdFx0Y29uc3QgTW9udGggPSAnbW0nO1xyXG5cdFx0Y29uc3QgU2luZ2xlTW9udGggPSAnbSc7XHJcblx0XHRjb25zdCBEYXkgPSAnZGQnO1xyXG5cdFx0Y29uc3QgU2luZ2xlRGF5ID0gJ2QnO1xyXG5cclxuXHRcdGxldCBjaGFycyA9IFtdO1xyXG5cdFx0bGV0IHByZXZDaGFyID0gJyc7XHJcblx0XHRsZXQgY3VyckNoYXIgPSAnJztcclxuXHRcdGxldCBpbmRleCA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGN1cnJDaGFyID0gU2lnbnMuaW5jbHVkZXMocGF0dGVybltpXSkgPyBwYXR0ZXJuW2ldIDogJyc7XHJcblxyXG5cdFx0XHRpZihjdXJyQ2hhciA9PT0gJycpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoY3VyckNoYXIgPT09IHByZXZDaGFyKSB7XHJcblx0XHRcdFx0Y2hhcnNbaW5kZXhdLnRleHQgKz0gY3VyckNoYXI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2hhcnNbKytpbmRleF0gPSB7IHRleHQ6IGN1cnJDaGFyLCBwb3NpdGlvbjogaX07XHJcblx0XHRcdH1cclxuXHRcdFx0cHJldkNoYXIgPSBjdXJyQ2hhcjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBpIGluIGNoYXJzKSB7XHJcblx0XHRcdHN3aXRjaCAoY2hhcnNbaV0udGV4dCkge1xyXG5cdFx0XHRcdGNhc2UgRnVsbFllYXI6XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShGdWxsWWVhciwgdGhpcy5nZXRDYWxlbmRhcigpLmdldFllYXIoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBTaG9ydFllYXI6XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShTaG9ydFllYXIsIFN0cmluZyh0aGlzLmdldENhbGVuZGFyKCkuZ2V0WWVhcigpKS5zdWJzdHIoLTIsIDIpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFNpbmdsZU1vbnRoOlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2luZ2xlTW9udGgsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1vbnRoOlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoTW9udGgsIHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpID4gOSA/IHRoaXMuZ2V0Q2FsZW5kYXIoKS5nZXRNb250aCgpIDogJzAnICsgdGhpcy5nZXRDYWxlbmRhcigpLmdldE1vbnRoKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgU2luZ2xlRGF5OlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoU2luZ2xlRGF5LCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgRGF5OlxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoRGF5LCB0aGlzLmdldENhbGVuZGFyKCkuZ2V0RGF5KCkgPiA5ID8gdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpIDogJzAnICsgdGhpcy5nZXRDYWxlbmRhcigpLmdldERheSgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuIiwiXHJcbmNsYXNzIENvbnN0YW50cyB7XHJcblx0IFxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHJcblx0fVxyXG59XHJcblxyXG5Db25zdGFudHMuSjE5NzAgPSAyNDQwNTg3LjU7IC8vIEp1bGlhbiBkYXRlIGF0IFVuaXggZXBvY2g6IDE5NzAtMDEtMDFcclxuQ29uc3RhbnRzLkRheUluU2Vjb25kID0gODY0MDA7XHJcbkNvbnN0YW50cy5TaGlhRXBvY2ggPSAxOTQ4NDM5LjU7XHJcbkNvbnN0YW50cy5KYWxhbGlFcG9jaCA9IDE5NDgzMjAuNTtcclxuQ29uc3RhbnRzLkdyZWdvcmlhbkVwb2NoID0gMTcyMTQyNS41O1xyXG5Db25zdGFudHMuSXNsYW1pY0Vwb2NoID0gMTk0ODQzOS41O1xyXG5Db25zdGFudHMuRGF5c09mSXNsYW1pY1llYXIgPSAzNTQ7XHJcbkNvbnN0YW50cy5EYXlzT2ZTaGlhWWVhciA9IDM1NDtcclxuQ29uc3RhbnRzLkRheXNPZkphbGFsaVllYXIgPSAzNjU7XHJcbkNvbnN0YW50cy5EYXlzT2ZHYXJlZ29yaWFuWWVhciA9IDM2NTsiLCJcclxuY2xhc3MgTG9jYWxpemF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSB7fTtcclxuICAgICAgICB0aGlzLl9sb2NhbGUgPSAnZmEnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExhbmcgKG5hbWUsIHRyYW5zKSB7XHJcbiAgICAgICAgdGhpcy5fbGFuZ3NbbmFtZV0gPSB0cmFucztcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlIHx8IHRoaXMuX2xvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2NhbGUgKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPT09IGxvY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNUcmFuc0tleSAoa2V5LCBsb2NhbGUpIHtcclxuICAgICAgICBsZXQgc3ViS2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYW5nc1tsb2NhbGVdID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9sYW5nc1tsb2NhbGVdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViS2V5c1tpXSBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJLZXlzW2ldXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zIChrZXksIGxvY2FsZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmhhc1RyYW5zS2V5KGtleSwgbG9jYWxlKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDoga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zIChrZXksIGxvY2FsZSkge1xyXG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCB0aGlzLl9sb2NhbGU7XHJcbiAgICAgICAga2V5ID0ga2V5IHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zKGtleSwgbG9jYWxlKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY2xhc3MgUGFzb29uYXRlIGV4dGVuZHMgQ29uc3RhbnRzIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBtYWtlICh0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KSB7XHJcblx0XHRyZXR1cm4gbmV3IENhbGVuZGFyTWFuYWdlcih0aW1lc3RhbXAsIHRpbWV6b25lT2Zmc2V0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB0cmFucyAoa2V5LCBsb2NhbGUpIHtcclxuXHRcdHJldHVybiBQYXNvb25hdGUubG9jYWxpemF0aW9uLnRyYW5zKGtleSwgbG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzZXRMb2NhbGUgKGxvY2FsZSkge1xyXG5cdFx0UGFzb29uYXRlLmxvY2FsaXphdGlvbi5zZXRMb2NhbGUobG9jYWxlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMb2NhbCAoKSB7XHJcblx0XHRyZXR1cm4gUGFzb29uYXRlLmxvY2FsaXphdGlvbi5nZXRMb2NhbCgpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzTG9jYWwgKGxvY2FsZSkge1xyXG5cdFx0cmV0dXJuIFBhc29vbmF0ZS5sb2NhbGl6YXRpb24uaXNMb2NhbChsb2NhbGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNldEZvcm1hdHRlciAoZm9ybWF0dGVyKSB7XHJcblx0XHRQYXNvb25hdGUuZm9ybWF0dGVyID0gZm9ybWF0dGVyIGluc3RhbmNlb2YgRGF0ZUZvcm1hdCA/IGZvcm1hdHRlciA6IG5ldyBTaW1wbGVEYXRlRm9ybWF0KCk7XHJcblx0fVxyXG59XHJcblxyXG5QYXNvb25hdGUubG9jYWxpemF0aW9uID0gbmV3IExvY2FsaXphdGlvbigpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnbG9jYWxpemF0aW9uJywge1xyXG4gICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG59KTtcclxuXHJcblBhc29vbmF0ZS5mb3JtYXR0ZXIgPSBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGFzb29uYXRlLCAnZm9ybWF0dGVyJywge1xyXG4gICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXHJcbn0pO1xyXG4iLCJcclxubGV0IGZhID0ge1xyXG5cdGdyZWdvcmlhbjoge1xyXG5cdFx0ZGF5X25hbWU6IHtcclxuXHRcdFx0c3VuZGF5OiBcIlN1bmRheVwiXHJcblx0XHR9XHJcblx0fSxcclxuXHRqYWxhbGk6IHt9LFxyXG5cdGlzbGFtaWM6IHt9LFxyXG5cdHNoaWE6IHt9XHJcbn07XHJcblxyXG5QYXNvb25hdGUubG9jYWxpemF0aW9uLnNldExhbmcoJ2ZhJywgZmEpOyJdfQ==

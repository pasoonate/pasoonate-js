const AdditionAndSubtraction = {
	addYear(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let year = date.year + count;
		let daysInMonth = this._currentCalendar.daysInMonth(year, date.month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, date.month, day, date.hour, date.minute, date.second);
		this._timestamp = timestamp - this._timezoneOffset;

		return this;
	},

	addMonth(count) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let totalMonth = date.month + count;
		let year = date.year + Math.ceil((totalMonth / 12) - 1);
		let month = (totalMonth % 12) === 0 ? 12 : (totalMonth % 12);
		let daysInMonth = this._currentCalendar.daysInMonth(year, month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);

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
		let year = date.year - count;
		let daysInMonth = this._currentCalendar.daysInMonth(year, date.month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, date.month, day, date.hour, date.minute, date.second);
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

		let daysInMonth = this._currentCalendar.daysInMonth(year, month);
		let day = date.day <= daysInMonth ? date.day : daysInMonth;
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
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


const Base = {
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

	getDate () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		
		return {
			year: date.year,
			month: date.month,
			day: date.day,
		};
	},
	
	setTime (hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getTime () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		
		return {
			hour: date.hour,
			minute: date.minute,
			second: date.second,
		};
	},
	
	setDateTime (year, month, day, hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		let timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);
		this._timestamp = timestamp - this._timezoneOffset;
		return this;
	},

	getDateTime () {
		let date = this._currentCalendar.timestampToDate(this._timestamp + this._timezoneOffset);
		
		return {
			year: date.year,
			month: date.month,
			day: date.day,
			hour: date.hour,
			minute: date.minute,
			second: date.second,
		};
	},

	setUTCDate (year, month, day) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, date.hour, date.minute, date.second);
		return this;
	},

	getUTCDate () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		
		return {
			year: date.year,
			month: date.month,
			day: date.day,
		};
	},
	
	setUTCTime (hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(date.year, date.month, date.day, hour, minute, second);
		return this;
	},

	getUTCTime () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		
		return {
			hour: date.hour,
			minute: date.minute,
			second: date.second,
		};
	},
	
	setUTCDateTime (year, month, day, hour, minute, second) {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		this._timestamp = this._currentCalendar.dateToTimestamp(year, month, day, hour, minute, second);
		return this;
	},

	getUTCDateTime () {
		let date = this._currentCalendar.timestampToDate(this._timestamp);
		
		return {
			year: date.year,
			month: date.month,
			day: date.day,
			hour: date.hour,
			minute: date.minute,
			second: date.second,
		};
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




const Comparison = {
    equal (other) {
        return this._timestamp === other._timestamp;
    },

    afterThan (other) {
        return this._timestamp > other._timestamp;
    },

    afterThanOrEqual (other) {
        return this._timestamp >= other._timestamp;
    },

    beforeThan (other) {
        return this._timestamp < other._timestamp;
    },

    beforeThanOrEqual (other) {
        return this._timestamp <= other._timestamp;
    },

    between (value1, value2) {
        return value1._timestamp <= this._timestamp && value2._timestamp >= this._timestamp;
    },

    min (other) {
        return this._timestamp <= other._timestamp ? this : other;
    },

    max (other) {
        return this._timestamp >= other._timestamp ? this : other;
    },

    isWeekday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) !== Constants.Friday;
    },

    isWeekend () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Friday;
    },

    isSaturday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Saturday;
    },
    
    isSunday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Sunday;
    },
    
    isMonday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Monday;
    },
    
    isTuesday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Tuesday;
    },
    
    isWednesday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Wednesday;
    },
    
    isThursday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Thursday;
    },
    
    isFriday () {
        return this._currentCalendar.dayOfWeek(this._timestamp + this._timezoneOffset) === Constants.Friday;
    },

    isYesterday () {
        const yesterday = Pasoonate.make().gregorian().subDay(1);

        return this.gregorian().diffInDays(yesterday) === 0;
    },

    isToday () {
        const today = Pasoonate.make().gregorian();

        return this.gregorian().diffInDays(today) === 0;
    },

    isTomorrow () {
        const tomorrow = Pasoonate.make().gregorian().addDay(1);

        return this.gregorian().diffInDays(tomorrow) === 0;
    },

    isFuture () {
        const today = Pasoonate.make().gregorian();

        return this.gregorian().diffInDays(today) > 1;
    },

    isPast () {
        const today = Pasoonate.make().gregorian();

        return today.gregorian().diffInDays(this) > 1;
    },

    isLeapYear () {
        return this._currentCalendar.isLeap(this._currentCalendar.getYear());
    },

    isSameDay (other) {
        return this.gregorian().diffInDays(other) === 0;
    }
};





const Difference = {
    diff (instance) {
        const diffInSeconds = this.diffInSeconds(instance);
        const diffInDays = diffInSeconds / Constants.DayInSeconds;

        const years = parseInt(diffInDays) / Constants.YearInDays;
        const months = parseInt(diffInDays) / Constants.MonthInDays;
        const days = this.diffInDays(instance) % Constants.MonthInDays;
        const hours = this.diffInHours(instance) % Constants.HoursPerDay;
        const minutes = this.diffInMinutes(instance) % Constants.MinutesPerHour;
        const seconds = diffInSeconds % Constants.SecondsPerMinute;

        const diff = {
            years: parseInt(years),
            months: parseInt(months),
            days: parseInt(days),
            hours: parseInt(hours),
            minutes: parseInt(minutes),
            seconds: parseInt(seconds)
        };

        return diff;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInSeconds (instance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());

        return diffInSeconds;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInMinutes (instance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
        const diffInMinutes = diffInSeconds >= Constants.SecondsPerMinute ? parseInt(diffInSeconds / Constants.SecondsPerMinute) : 0;

        return diffInMinutes;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInHours (instance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
        const diffInHours = diffInSeconds >= Constants.HourInSeconds ? parseInt(diffInSeconds / Constants.HourInSeconds) : 0;

        return diffInHours;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInDays (instance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
        const diffInDays = diffInSeconds >= Constants.DayInSeconds ? parseInt(diffInSeconds / Constants.DayInSeconds) : 0;

        return diffInDays;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInMonths (instance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
        const diffInMonths = diffInSeconds >= Constants.MonthInSeconds ? parseInt(diffInSeconds / Constants.MonthInSeconds) : 0;

        return diffInMonths;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInYears (instance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - instance.getTimestamp());
        const diffInYears = diffInSeconds >= Constants.YearInSeconds ? parseInt(diffInSeconds / Constants.YearInSeconds) : 0;

        return diffInYears;
    }
};



const Modifiers = {
    
    startOfDay() {
        return this.setTime(0, 0, 0);
    },
    
    endOfDay() {
        return this.setTime(23, 59, 59);
    },
    
    startOfMonth() {
        return this.setDay(1).startOfDay();
    },
    
    endOfMonth() {
        return this.setDay(this._currentCalendar.daysInMonth(this.getYear(), this.getMonth())).endOfDay();
    },

    startOfYear() {
        return this.setMonth(1).startOfMonth();
    },

    endOfYear() {
        return this.setMonth(12).endOfMonth();
    },

    startOfWeek() {
        const daysToSaturday = this.dayOfWeek();

        return this.subDay(daysToSaturday).startOfDay();
    },

    endOfWeek() {
        const daysToFriday = 6 - this.dayOfWeek();

        return this.addDay(daysToFriday).endOfDay();
    }
};




class Calendar {
	
	constructor () {
		this.J1970 = 2440587.5;			// Julian date at Unix epoch: 1970-01-01
        this.name = '';
    }
    
    getName () {
        return this.name;
    }

	timestampToJulianDay (timestamp) {
        let julianDay =  timestamp / Constants.DayInSeconds + this.J1970;
        
        let julianDayFloatRounded = Math.round((julianDay - Math.floor(julianDay)) * 10000000) / 10000000;

        return Math.floor(julianDay) + julianDayFloatRounded;
	}

	julianDayToTimestamp (julianDay) {
		let timestamp = Math.round((julianDay - this.J1970) * Constants.DayInSeconds);
		
		return timestamp;
    }

	julianDayWithoutTime (julianDay) {
		
		return Math.floor(julianDay) + ((julianDay - Math.floor(julianDay)) >= 0.5 ?  0.5 : -0.5);
	}

	extractJulianDayTime (julianDay) {
        julianDay += 0.5;

        // Astronomical to civil
        let time = Math.floor((julianDay - Math.floor(julianDay)) * Constants.DayInSeconds);

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
		this._timestamp = timestamp || (Math.floor(date.getTime() / 1000)); // millisecond to seconds
		this._timezoneOffset = timezoneOffset !== undefined || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian (strDateTime) {
		this._currentCalendar = this._gregorian;
		this.parse(strDateTime);
		
		return this;
	}

	jalali (strDateTime) {
		this._currentCalendar = this._jalali;
		this.parse(strDateTime);

		return this;
	}

	islamic (strDateTime) {
		this._currentCalendar = this._islamic;
		this.parse(strDateTime);

		return this;
	}

	shia (strDateTime) {
		this._currentCalendar = this._shia;
		this.parse(strDateTime);

		return this;
	}

	name (calendar) {
		if(calendar) {
			calendar = String(calendar).toLowerCase();
			const instance = this[`_${calendar}`];

			if(instance) {
				this._currentCalendar = instance;	
			}

			return;
		}

		return this._currentCalendar ? this._currentCalendar.getName() : '';
	}

	/**
	 * 
	 * @param {String} expression 
	 */
	parse (expression) {
		const parsers = Pasoonate.parsers;

		for(let i in parsers) {
			const pattern = parsers[i].pattern();
			
			if(pattern.test(expression)) {
				(new parsers[i](this)).parse(expression);
				break;
			}
		}

		return this;
	}

	format (pattern, locale) {
		this._formatter.setCalendar(this);
		return this._formatter.format(pattern, locale);
	}

	clone () {
		return Pasoonate.make(this.getTimestamp(), this.getTimezoneOffset());
	}
}

Object.assign(CalendarManager.prototype, Base);
Object.assign(CalendarManager.prototype, AdditionAndSubtraction);
Object.assign(CalendarManager.prototype, Difference);
Object.assign(CalendarManager.prototype, Comparison);
Object.assign(CalendarManager.prototype, Modifiers);





class GregorianCalendar extends Calendar {
	constructor () {
        super();
        
        this.name = "gregorian";
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

        this.name = "islamic";
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

        this.name = "jalali";
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
        
        this.name = "shia";
		this.ShiaEpoch = 1948439.5;
		Object.defineProperty(this, 'ShiaEpoch', {
            writable: false,
            configurable: false
        });
	}

	dateToJulianDay (year, month, day, hour, minute, second) {
        const daysInMonth = this.daysInMonth(year, month);
        let dayOfYear = day;
        let firstOfYear = this.julianDayFirstOfYear(year);
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
        
        if(firstOfYear) {
            julianDay += firstOfYear - 1;
        }
        else {
            julianDay += (year - 1) * Constants.DaysOfShiaYear;
            julianDay += Math.floor(((11 * year) + 14) / 30);
            julianDay += this.ShiaEpoch - (year === 1440  ? 2 : 1);
        }
        
		return this.addTimeToJulianDay(julianDay, hour, minute, second);
	}

    julianDayToDate (julianDay) {
        let time = this.extractJulianDayTime(julianDay);
            
        julianDay = this.julianDayWithoutTime(julianDay);

        let year = Math.floor((((julianDay - this.ShiaEpoch) * 30) + 10646) / 10631);
        let month = Math.min(12, Math.ceil((julianDay - (29 + this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second)))) / 29.5) + 1);
        let dayOfYear = julianDay - this.dateToJulianDay(year, 1, 1, 0, 0, 0) + 1;
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
            1440: [30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29],
            1441: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30],
            1442: [29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29],
            1443: [29, 30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30]
        };

        if (month < 1 || month > 12) {
            throw new RangeException("$month Out Of Range Exception");
        }
        
        if (shiaDaysInMonthInYears[year] === undefined) {
            return islamicDaysInMonth[month - 1];
        }
        
        return shiaDaysInMonthInYears[year][month - 1];   	
    }

    julianDayFirstOfYear(year) {
        let julianDays = {
            1435: 2456601.5, 
            1436: 2456956.5,
            1437: 2457310.5,
            1438: 2457664.5,
            1439: 2458018.5,
            1440: 2458372.5,
            1441: 2458727.5,
            1442: 2459082.5,
            1443: 2459436.5
        };

        return julianDays[year];
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





class Parser {

    /**
     * 
     * @param {CalendarManager} calendarManager 
     */
    constructor (calendarManager) {
        this._calendarManager = calendarManager instanceof CalendarManager ? calendarManager : null;
        this._locale = Pasoonate.getLocale();
        this._format = '';
    }

    /**
     * @returns {RegExp}
     */
    static pattern() {
        return '';
    }

    /**
     * 
     * @param {String} datetime 
     */
    parse (datetime) {
        
    }
}





class SimpleParser extends Parser {
    
    /**
     * 
     * @param {CalendarManager} calendarManager 
     */
    constructor (calendarManager) {
        super(calendarManager);
    }

    /**
     * @returns {RegExp}
     */
    static pattern () {
        return /\d{2,4}[-\/]{1}\d{1,2}[-\/]{1}\d{1,2}([ ]+\d{1,2}[:]{1}\d{1,2}[:]{1}\d{1,2}){0,1}/;
    }

    /**
     * 
     * @param {String} datetime 
     */
    parse (datetime) {
        if(this._calendarManager && datetime) {
			const [date, time] = String(datetime).trim().split(' ');
            
            
			if(date) {
				const [year, month, day] = date.trim().split(/[\/-]/g);
				this._calendarManager.setDate(Number(year), Number(month) || 1, Number(day) || 1);
			}

			if(time) {
				const [hour, minute, second] = time.trim().split(':');
				this._calendarManager.setTime(Number(hour) || 0, Number(minute) || 0, Number(second) || 0);
			}
		}
    }
}


const fa = {
	gregorian: {
		day_name: {
            '0': 'Saturday',
            '1': 'Sunday',
            '2': 'Monday',
            '3': 'Tuesday',
            '4': 'Wednesday',
            '5': 'Thursday',
            '6': 'Friday'
		},
		short_day_name: {
            '0': 'Sat',
            '1': 'Sun',
            '2': 'Mon',
            '3': 'Tue',
            '4': 'Wed',
            '5': 'Thu',
            '6': 'Fri'
        },
        month_name: {
            '1':  'January',
            '2':  'February',
            '3':  'March',
            '4':  'April',
            '5':  'May',
            '6':  'June',
            '7':  'July',
            '8':  'August',
            '9':  'September',
            '10': 'October',
            '11': 'November',
            '12': 'December',
		},
		short_month_name: {
            '1':  'Jan',
            '2':  'Feb',
            '3':  'Mar',
            '4':  'Apr',
            '5':  'May',
            '6':  'Jun',
            '7':  'Jul',
            '8':  'Aug',
            '9':  'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec',
        }
	},
	jalali: {
		day_name: {
            '0': 'شنبه',
            '1': 'یک‌شنبه',
            '2': 'دوشنبه',
            '3': 'سه‌شنبه',
            '4': 'چهارشنبه',
            '5': 'پنج‌شنبه',
            '6': 'جمعه'
		},
		short_day_name: {
            '0': 'ش',
            '1': 'ی',
            '2': 'د',
            '3': 'س',
            '4': 'چ',
            '5': 'پ',
            '6': 'ج'
        },
        month_name: {
            '1':  'فروردین',
            '2':  'اردیبهشت',
            '3':  'خرداد',
            '4':  'تیر',
            '5':  'مرداد',
            '6':  'شهریور',
            '7':  'مهر',
            '8':  'آبان',
            '9':  'آذر',
            '10': 'دی',
            '11': 'بهمن',
            '12': 'اسفند',
		},
		short_month_name: {
            '1':  'فرو',
            '2':  'ارد',
            '3':  'خرد',
            '4':  'تیر',
            '5':  'مرد',
            '6':  'شهر',
            '7':  'مهر',
            '8':  'آبا',
            '9':  'آذر',
            '10': 'دی',
            '11': 'بهم',
            '12': 'اسف',
        }
	},
	islamic: {
		day_name: {
            '0': 'السبت',
            '1': 'الأحَد',
            '2': 'الإثنين',
            '3': 'الثلاثاء',
            '4': 'الأربعاء',
            '5': 'الخميس',
            '6': 'الجمعة'
		},
		short_day_name: {
            '0': 'السبت',
            '1': 'الأحَد',
            '2': 'الإثنين',
            '3': 'الثلاثاء',
            '4': 'الأربعاء',
            '5': 'الخميس',
            '6': 'الجمعة'
        },
        month_name: {
            '1':  'محرم',
            '2':  'صفر',
            '3':  'ربیع‌الاول',
            '4':  'ربیع‌الثانی',
            '5':  'جمادی‌الاول',
            '6':  'جمادی‌الثانی',
            '7':  'رجب',
            '8':  'شعبان',
            '9':  'رمضان',
            '10': 'شوال',
            '11': 'ذیقعده',
            '12': 'ذیحجه',
		},
		short_month_name: {
            '1':  'محرم',
            '2':  'صفر',
            '3':  'ربیع‌الاول',
            '4':  'ربیع‌الثانی',
            '5':  'جمادی‌الاول',
            '6':  'جمادی‌الثانی',
            '7':  'رجب',
            '8':  'شعبان',
            '9':  'رمضان',
            '10': 'شوال',
            '11': 'ذیقعده',
            '12': 'ذیحجه',
        }
	},
	shia: {
		day_name: {
            '0': 'السبت',
            '1': 'الأحَد',
            '2': 'الإثنين',
            '3': 'الثلاثاء',
            '4': 'الأربعاء',
            '5': 'الخميس',
            '6': 'الجمعة'
		},
		short_day_name: {
            '0': 'السبت',
            '1': 'الأحَد',
            '2': 'الإثنين',
            '3': 'الثلاثاء',
            '4': 'الأربعاء',
            '5': 'الخميس',
            '6': 'الجمعة'
        },
        month_name: {
            '1':  'محرم',
            '2':  'صفر',
            '3':  'ربیع‌الاول',
            '4':  'ربیع‌الثانی',
            '5':  'جمادی‌الاول',
            '6':  'جمادی‌الثانی',
            '7':  'رجب',
            '8':  'شعبان',
            '9':  'رمضان',
            '10': 'شوال',
            '11': 'ذیقعده',
            '12': 'ذیحجه',
		},
		short_month_name: {
            '1':  'محرم',
            '2':  'صفر',
            '3':  'ربیع‌الاول',
            '4':  'ربیع‌الثانی',
            '5':  'جمادی‌الاول',
            '6':  'جمادی‌الثانی',
            '7':  'رجب',
            '8':  'شعبان',
            '9':  'رمضان',
            '10': 'شوال',
            '11': 'ذیقعده',
            '12': 'ذیحجه',
        }
	}
};


const Constants = {
	J1970: 2440587.5, // Julian date at Unix epoch: 1970-01-01
	Saturday: 0,
	Sunday: 1,
	Monday: 2,
	Tuesday: 3,
	Wednesday: 4,
	Thursday: 5,
	Friday: 6,
	YearsPerCentury: 100,
	YearsPerDecade: 10,
	MonthsPerYear: 12,
	WeeksPerYear: 52,
	DaysPerWeek: 7,
	HoursPerDay: 24,
	MinutesPerHour: 60,
	SecondsPerMinute: 60,
	HourInSeconds: 3600,
	DayInSeconds: 86400,
	WeekInSeconds: 604800,
	MonthInSeconds: 2629743,
	YearInSeconds: 31556926,
	MonthInDays: 30.44,
	YearInDays: 365.24,
	ShiaEpoch: 1948439.5,
	JalaliEpoch: 1948320.5,
	GregorianEpoch: 1721425.5,
	IslamicEpoch: 1948439.5,
	DaysOfIslamicYear: 354,
	DaysOfShiaYear: 354,
	DaysOfJalaliYear: 365,
	DaysOfGregorianYear: 365,
	Gregorian: 'gregorian',
	Jalali: 'jalali',
	Shia: 'shia',
	Islamic: 'islamic'
};


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










class Pasoonate {

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

	static getLocale () {
		return Pasoonate.localization.getLocale();
	}

	static isLocale (locale) {
		return Pasoonate.localization.isLocale(locale);
	}

	static setFormatter (formatter) {
		Pasoonate.formatter = formatter instanceof DateFormat ? formatter : new SimpleDateFormat();
	}

	/**
	 * 
	 * @param {Parser} parser 
	 */
	static setParser (parser) {
		Pasoonate.parsers.push(parser);
	}

	/**
	 *
	 * @param {CalendarManager} instance 
	 * @param {CalendarManager}
	 */
	static clone (instance) {
		return Pasoonate.make(instance.getTimestamp(), instance.getTimezoneOffset());
	}
}

Object.assign(Pasoonate, Constants);

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

Pasoonate.parsers = [SimpleParser];
Object.defineProperty(Pasoonate, 'parsers', {
	writable: false,
	configurable: false
});

Pasoonate.localization.setLang('fa', fa)


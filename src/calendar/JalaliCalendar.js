'use strict';

import Calendar from "./Calendar";
import Constants from "../Constants";

class JalaliCalendar extends Calendar {
	
	constructor () {
        super();

        this.name = Constants.Jalali;
		this.JalaliEpoch = 1948320.5;
		Object.defineProperty(this, 'JalaliEpoch', {
            writable: false,
            configurable: false
        });
	}

	dateToJulianDay (year, month, day, hour, minute, second) {
        let timestamp = 0;
        let days = 0;

        days += Math.floor((year - 1) * Constants.DaysOfTropicalJalaliYear);
        days += month <= 7 ? ((month - 1) * 31) : (((month - 1) * 30) + 6);
        days += day - 1;

        if(this.isLeap(year - 1)) {
            days++;
        }

        timestamp += days * Constants.DayInSeconds;
        timestamp += (hour * Constants.HourInSeconds) + (minute * Constants.SecondsPerMinute) + second;
        timestamp -= 42531868800;
        
        return this.timestampToJulianDay(timestamp);
	}

    julianDayToDate (julianDay) {
        const timestamp = this.julianDayToTimestamp(julianDay);
        const base = timestamp + 42531868800;
        const second = this.mod(base, Constants.SecondsPerMinute);
        const minute = Math.floor(this.mod(base, Constants.HourInSeconds) / Constants.SecondsPerMinute);
        const hour = Math.floor(this.mod(base, Constants.DayInSeconds) / Constants.HourInSeconds);
        const days = Math.floor(base / Constants.DayInSeconds);
        const fyear = Math.floor(days / Constants.DaysOfTropicalJalaliYear); 
        let year = Math.floor(days / Constants.DaysOfJalaliYear); 
        let dayOfYear = days - Math.floor(fyear * Constants.DaysOfTropicalJalaliYear);

        if(this.isLeap(fyear)) {
            dayOfYear--;
        }

        if(dayOfYear >= Constants.DaysOfJalaliYear && !this.isLeap(year)) {
            dayOfYear = 0;
            year++;
        }

        if(year === fyear) {
            year++;
        }

        const month = Math.floor(dayOfYear <= 186 ? (dayOfYear / 31) : ((dayOfYear - 6) / 30)) + 1;
        const day = dayOfYear - (month <= 7 ? (month - 1) * 31 : ((month - 1) * 30) + 6) + 1;

        return {
        	"year": year,
        	"month": month,
        	"day": day,
        	"hour": hour,
        	"minute": minute,
        	"second": second,
        }
    }

    daysInMonth (year, month) {
        let gregorianDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]; //30
        
        if (month < 1 || month > 12) {
            throw new RangeException("$month Out Of Range Exception");
        }
        
        if (year && this.isLeap(year) && month === Constants.MonthsPerYear) {
            return 30;
        }
        
        return gregorianDaysInMonth[month - 1];
    }

    isLeap (year) {
        const validRemainValueAfter1343 = [1,5,9,13,17,22,26,30];
        const validRemainValueBefore1343 = [1,5,9,13,17,21,26,30];

        const remain = year % 33;

	    return year < 1343 ? validRemainValueBefore1343.includes(remain) : validRemainValueAfter1343.includes(remain);
    }
}

export default JalaliCalendar;
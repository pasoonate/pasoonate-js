import Calendar from "./Calendar";
import Constants from "../Constants";

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
            1443: [29, 30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30],
            1444: [30, 30, 29, 30, 29, 29, 30, 30, 29, 30, 29, 30]
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
            1443: 2459436.5,
            1444: 2459790.5
        };

        if(julianDays[year] !== undefined) {
            return julianDays[year];
        }
        
        const availYears = Object.keys(julianDays)
        const minYear = Math.min(...availYears);
        const maxYear = Math.max(...availYears);
        let julianDay = 0;

        if(year > maxYear) {
           julianDay = julianDays[maxYear] + ((year - maxYear) * Constants.DaysOfShiaYear);
        }
        else {
            julianDay = julianDays[minYear] - ((minYear - year) * Constants.DaysOfShiaYear);
        }

        return julianDay;
    }

    isLeap (year) {
        let isLeap = (((year * 11) + 14) % 30) < 11;

		return isLeap;
	}
}

export default ShiaCalendar;
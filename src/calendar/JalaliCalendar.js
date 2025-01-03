import Calendar from "./Calendar";

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
        let timestamp = 0
        let days = 0;

        days += Math.floor((year - 1) * 365.24219878);
        days += month <= 7 ? ((month - 1) * 31) : (((month - 1) * 30) + 6);
        days += day - 1;

        if(this.isLeap(year - 1)) {
            days++;
        }

        timestamp += days * 86400;
        timestamp += (hour * 3600) + (minute * 60) + second;
        timestamp -= 42531868800;
        
        const julianDay = this.timestampToJulianDay(timestamp);

		return julianDay;
	}

    julianDayToDate (julianDay) {
        const timestamp = this.julianDayToTimestamp(julianDay);
        const base = timestamp + 42531868800;
        const second = this.mod(base, 60);
        const minute = Math.floor(this.mod(base, 3600) / 60);
        const hour = Math.floor(this.mod(base, 86400) / 3600);
        const days = Math.floor(base / 86400);
        const fyear = Math.floor(days / 365.24219878); 
        let year = Math.floor(days / 365); 
        let dayOfYear = days - Math.floor(fyear * 365.24219878);

        if(this.isLeap(fyear)) {
            dayOfYear--;
        }

        if(dayOfYear >= 365 && !this.isLeap(year)) {
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
        
        if (year && this.isLeap(year) && month == 12) {
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
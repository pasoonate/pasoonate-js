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

        days += Math.floor(((year * 682) - 110) / 2816) + ((year - 1) * 365);
        days += month <= 7 ? ((month - 1) * 31) : (((month - 1) * 30) + 6);
        days += day - 1;

        if(year == 1404 && month == 1 && day >= 1 && day <= 25) {
            days += 1;
        }

        timestamp += days * 86400;
        timestamp += (hour * 3600) + (minute * 60) + second;
        timestamp -= 42531868800;
        
        // let epochBase = year - (year >= 0 ? 474 : 473);
        // let epochYear = 474 + this.mod(epochBase, 2820);
        // let julianDay = day;

        // julianDay += month <= 7 ? (month - 1) * 31 : ((month - 1) * 30) + 6;
        // julianDay += Math.floor(((epochYear * 682) - 110) / 2816);
        // julianDay += (epochYear - 1) * 365;
        // julianDay += Math.floor(epochBase / 2820) * 1029983;
        // julianDay += this.JalaliEpoch - 1;

        // julianDay = this.addTimeToJulianDay(julianDay, hour, minute, second);

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
        let year = Math.floor(days / 365);
        const dayOfYear = days - (Math.floor(((year * 682) - 110) / 2816) + ((year - 1) * 365));
        let month = Math.floor(dayOfYear <= 186 ? (dayOfYear / 31) : ((dayOfYear - 6) / 30)) + 1;
        let day = dayOfYear - (month <= 7 ? (month - 1) * 31 : ((month - 1) * 30) + 6) + 1;

        if (month > 12) {
            day += this.isLeap(year) ? 0 : 1;
            month -= 12;
            year += 1; 
        }

        if (month == 12 && day > 29 && !this.isLeap(year)) {
            day = 1;
            month = 1;
            year += 1;
        }

    	// let time = this.extractJulianDayTime(julianDay);
    	
    	// julianDay = this.julianDayWithoutTime(julianDay);

    	// julianDay = Math.floor(julianDay) + 0.5;

        // let depoch = julianDay - 2121445.5; //this.julianDayWithoutTime(this.dateToJulianDay(475, 1, 1, time.hour, time.minute, time.second));
        // let cycle = Math.floor(depoch / 1029983);
        // let cyear = this.mod(depoch, 1029983);        
    	// let ycycle, aux1, aux2;

        // if (cyear == 1029982) {
        //     ycycle = 2820;
        // } else {
        //     aux1 = Math.floor(cyear / 366);
        //     aux2 = this.mod(cyear, 366);
        //     ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;
        // }
        
        // let year = ycycle + (2820 * cycle) + 474;
        
        // if (year <= 0) {
        //     year--;
        // }

        // let yday = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, 1, 1, time.hour, time.minute, time.second))) + 1;
        // let month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        // let day = (julianDay - this.julianDayWithoutTime(this.dateToJulianDay(year, month, 1, time.hour, time.minute, time.second))) + 1;
            
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
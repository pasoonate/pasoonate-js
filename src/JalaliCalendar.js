class JalaliCalendar extends Calendar {
	
	constructor (timestamp, offset) {
		super(timestamp, offset);
		
		this.JalaliEpoch = 1948320.5;
		Object.defineProperty(this, 'JalaliEpoch', {
            writable: false,
            configurable: false
        });
	}

	isLeap (year) {
		return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
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
}
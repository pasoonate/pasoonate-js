import Constants from '../Constants';

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

export default Comparison;
'use strict';

import Constants from '../Constants';

const Difference = {
    /**
     * 
     * @param {CalendarManager} instance
     * @return {Object}
     */
    age (instance) {
        const birthday = instance.clone();
        birthday.name(this.name());

        const todayDateTime = this.getDateTime();
        const birthdayDateTime = birthday.getDateTime();

        let seconds = todayDateTime.second - birthdayDateTime.second;
        let minutes = todayDateTime.minute - birthdayDateTime.minute;
        let hours = todayDateTime.hour - birthdayDateTime.hour;
        let days = todayDateTime.day - birthdayDateTime.day;
        let months = todayDateTime.month - birthdayDateTime.month;
        let years = todayDateTime.year - birthdayDateTime.year;

        if(seconds < 0) {
            seconds += Constants.SecondsPerMinute;
            minutes -= 1;
        }

        if(minutes < 0) {
            minutes += Constants.MinutesPerHour;
            hours -= 1;
        }

        if(hours < 0) {
            hours += Constants.HoursPerDay;
            days -= 1;
        }

        if(days < 0) {
            months -= 1;
            days += birthday._currentCalendar.daysInMonth(todayDateTime.year, todayDateTime.month - 1);
        }

        if(months < 0) {
            months += 12;
            years -= 1;
        }

        return {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    },

    /**
     *
     * @param {CalendarManager} instance
     * @return {Object}
     */
    diff (instance) {
        const seconds = this.diffInSeconds(instance);
        const minutes = Math.floor(seconds / Constants.SecondsPerMinute);
        const hours = Math.floor(seconds / Constants.HourInSeconds);
        const days =  Math.floor(seconds / Constants.DayInSeconds);
        const months = Math.floor(days / Constants.MonthInDays);
        const years = Math.floor(days / Constants.YearInDays);

        return {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInSeconds (instance) {
        return  Math.abs(this.getTimestamp() - instance.getTimestamp());
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInMinutes (instance) {
        const diffInSeconds = this.diffInSeconds(instance);

        return diffInSeconds >= Constants.SecondsPerMinute ? Math.floor(diffInSeconds / Constants.SecondsPerMinute) : 0;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInHours (instance) {
        const diffInSeconds = this.diffInSeconds(instance);

        return diffInSeconds >= Constants.HourInSeconds ? Math.floor(diffInSeconds / Constants.HourInSeconds) : 0;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInDays (instance) {
        const diffInSeconds = this.diffInSeconds(instance);

        return diffInSeconds >= Constants.DayInSeconds ? Math.floor(diffInSeconds / Constants.DayInSeconds) : 0;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInMonths (instance) {
        const diffInSeconds = this.diffInSeconds(instance);

        return diffInSeconds >= Constants.MonthInSeconds ? Math.floor(diffInSeconds / Constants.MonthInSeconds) : 0;
    },

    /**
     * 
     * @param {CalendarManager} instance
     * @return {Number}
     */
    diffInYears (instance) {
        const diffInSeconds = this.diffInSeconds(instance);

        return diffInSeconds >= Constants.YearInSeconds ? Math.floor(diffInSeconds / Constants.YearInSeconds) : 0;
    },

    /**
     *
     * @param {CalendarManager} instance
     * @return {Object}
     */
    diffForHumans (instance) {
        let before, base, other;
        const result = [];
        const space = " ";
        const defaultCalendar = this.name();
        const now = Pasoonate.make();

        if(this.beforeThan(instance)) {
            before = false;
            base = instance.clone();
            other = this.clone();
        } else {
            before = true;
            base = this.clone();
            other = instance.clone();
        }

        base.name(defaultCalendar);
        other.name(defaultCalendar);
        now.name(defaultCalendar);

        const age = base.age(other);

        if(age.years > 0) {
            result.push(age.years + space + Pasoonate.trans('diff.year'));
        }

        if(age.months > 0) {
            result.push(age.months + space + Pasoonate.trans('diff.month'));
        }

        if(age.days > 0) {
            result.push(age.days + space + Pasoonate.trans('diff.day'));
        }

        if(age.hours > 0) {
            result.push(age.hours + space + Pasoonate.trans('diff.hour'));
        }

        if(age.minutes > 0) {
            result.push(age.minutes + space + Pasoonate.trans('diff.minute'));
        }

        if(age.seconds > 0) {
            result.push(age.seconds + space + Pasoonate.trans('diff.second'));
        }

        if(result.length === 0) {
            result.push(Pasoonate.trans('diff.now'));
        } else if (now.diff(base).minutes === 0 || now.diff(other).minutes === 0) {
            result.push(before ? Pasoonate.trans('diff.ago') : Pasoonate.trans('diff.from_now'));
        } else {
            result.push(before ? Pasoonate.trans('diff.before') : Pasoonate.trans('diff.after'));
        }

        return result.join(space);
    }
};

export default Difference;
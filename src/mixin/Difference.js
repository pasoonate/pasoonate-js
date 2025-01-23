import Constants from '../Constants';
import CalendarManager from '../calendar/CalendarManager';

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

        const age = {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        return age;
    },

    diff (instance) {
        const diffInSeconds = this.diffInSeconds(instance);
        const diffInDays = diffInSeconds / Constants.DayInSeconds;

        const years = parseInt(diffInDays) / Constants.YearInDays;
        const months = parseInt(diffInDays) / Constants.MonthInDays;
        const days = parseInt(diffInDays);
        const hours = diffInSeconds / Constants.HourInSeconds;
        const minutes = diffInSeconds / Constants.SecondsPerMinute;
        const seconds = diffInSeconds;

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

export default Difference;
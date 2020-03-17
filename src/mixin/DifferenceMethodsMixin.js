import Constants from '../Constants';
import CalendarManager from '../calendar/CalendarManager';

const DifferenceMethodsMixin = {
    diff (instance) {
        const diffInSeconds = this.diffInSeconds(instance);
        const diffInDays = diffInSeconds / Constants.DayInSeconds;

        const years = parseInt(diffInDays) / Constants.YearInDays;
        const months = parseInt(diffInDays) / Constants.MonthInDays
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

export default DifferenceMethodsMixin;
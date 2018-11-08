
const DifferenceMethodsMixin = {
    diff (secondInstance) {
        let diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());

        const years = Math.floor(diffInSeconds / 31536000); // Constants.DaysOfJalaliYear * 24 * 60 * 60
        diffInSeconds %= 31536000;
        const months = Math.floor(diffInSeconds / 2592000); // 30 * 24 * 60 * 60
        diffInSeconds %= 2592000;
        const days = Math.floor(diffInSeconds / 86400); // 24 * 60 * 60
        diffInSeconds %= 86400;
        const hours = Math.floor(diffInSeconds / 3600); // 60 * 60
        diffInSeconds %= 3600;
        const minutes = Math.floor(diffInSeconds / 60);
        diffInSeconds %= 60;
        const seconds = diffInSeconds;

        const diff = {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        return diff;
    },

    diffInSeconds (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());

        return diffInSeconds;
    },

    diffInMinutes (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInMinutes = diffInSeconds > 60 ? Math.floor(diffInSeconds / 60) : 0;

        return diffInMinutes;
    },

    diffInHours (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInHours = diffInSeconds > 3600 ? Math.floor(diffInSeconds / 3600) : 0;

        return diffInHours;
    },

    diffInDays (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInDays = diffInSeconds > 86400 ? Math.floor(diffInSeconds / 86400) : 0;

        return diffInDays;
    },

    diffInMonths (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInMonths = diffInSeconds > 2592000 ? Math.floor(diffInSeconds / 2592000) : 0;

        return diffInMonths;
    },

    diffInYears (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInYears = diffInSeconds > 31536000 ? Math.floor(diffInSeconds / 31536000) : 0;

        return diffInYears;
    }
};

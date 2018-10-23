
const DifferenceMethodsMixin = {
    diff (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());

        return diffInSeconds;
    },

    diffInSeconds (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());

        return diffInSeconds;
    },

    diffInMinutes (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInMinutes = diffInSeconds > 60 ? Math.ceil(diffInSeconds / 60) : 0;

        return diffInMinutes;
    },

    diffInHours (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInHours = diffInSeconds > 3600 ? Math.ceil(diffInSeconds / 3600) : 0;

        return diffInHours;
    },

    diffInDays (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInDays = diffInSeconds > 86400 ? Math.ceil(diffInSeconds / 86400) : 0;

        return diffInDays;
    },

    diffInMonths (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInMonths = diffInSeconds > 2592000 ? Math.ceil(diffInSeconds / 2592000) : 0;

        return diffInMonths;
    },

    diffInYears (secondInstance) {
        const diffInSeconds = Math.abs(this.getTimestamp() - secondInstance.getTimestamp());
        const diffInYears = diffInSeconds > 31104000 ? Math.ceil(diffInSeconds / 31104000) : 0;

        return diffInYears;
    }
};

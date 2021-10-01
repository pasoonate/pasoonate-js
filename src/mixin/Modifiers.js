
const Modifiers = {
    
    startOfDay() {
        return this.setTime(0, 0, 0);
    },
    
    endOfDay() {
        return this.setTime(23, 59, 59);
    },
    
    startOfMonth() {
        return this.setDay(1).startOfDay();
    },
    
    endOfMonth() {
        return this.setDay(this._currentCalendar.daysInMonth(this.getYear(), this.getMonth())).endOfDay();
    },

    startOfYear() {
        return this.setMonth(1).startOfMonth();
    },

    endOfYear() {
        return this.setMonth(12).endOfMonth();
    },

    startOfWeek() {
        const daysToSaturday = this.dayOfWeek();

        return this.subDay(daysToSaturday).startOfDay();
    },

    endOfWeek() {
        const daysToFriday = 6 - this.dayOfWeek();

        return this.addDay(daysToFriday).endOfDay();
    }
};

export default Modifiers;
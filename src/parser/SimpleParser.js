import Parser from "./Parser";
import CalendarManager from "../calendar/CalendarManager";

class SimpleParser extends Parser {
    
    /**
     * 
     * @param {CalendarManager} calendarManager 
     */
    constructor (calendarManager) {
        super(calendarManager);
    }

    /**
     * @returns {RegExp}
     */
    static pattern () {
        return /\d{2,4}[-\/]{1}\d{1,2}[-\/]{1}\d{1,2}([ ]+\d{1,2}[:]{1}\d{1,2}[:]{1}\d{1,2}){0,1}/;
    }

    /**
     * 
     * @param {String} datetime 
     */
    parse (datetime) {
        if(this._calendarManager && datetime) {
			const [date, time] = String(datetime).trim().split(' ');
            
            
			if(date) {
				const [year, month, day] = date.trim().split(/[\/-]/g);
				this._calendarManager.setDate(Number(year), Number(month) || 1, Number(day) || 1);
			}

			if(time) {
				const [hour, minute, second] = time.trim().split(':');
				this._calendarManager.setTime(Number(hour) || 0, Number(minute) || 0, Number(second) || 0);
			}
		}
    }
}

export default SimpleParser;
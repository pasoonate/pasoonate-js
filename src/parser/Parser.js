import CalendarManager from "../calendar/CalendarManager";
import Pasoonate from "../Pasoonate";

class Parser {

    /**
     * 
     * @param {CalendarManager} calendarManager 
     */
    constructor (calendarManager) {
        this._calendarManager = calendarManager instanceof CalendarManager ? calendarManager : null;
        this._locale = Pasoonate.getLocal();
        this._format = '';
    }

    /**
     * @returns {RegExp}
     */
    static pattern() {
        return '';
    }

    /**
     * 
     * @param {String} datetime 
     */
    parse (datetime) {
        
    }
}

export default Parser;
import CalendarManager from "../calendar/CalendarManager";
import Pasoonate from "../Pasoonate";

class Parser {

    _calendar = null;

    constructor () {
        
    }

    /**
     * @return {CalendarManager} calendar
     */
    get calendar() {
        return this._calendar;
    }

    /**
     * @param {CalendarManager} calendar 
     */
    set calendar(calendar) {
        this._calendar = calendar instanceof CalendarManager ? calendar : null;
    }

    /**
     * 
     * @param {String} format 
     * @param {String} text 
     */
    parse (format, text) {
        //
    }
}

export default Parser;
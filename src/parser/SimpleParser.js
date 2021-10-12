import Parser from "./Parser";
import CalendarManager from "../calendar/CalendarManager";

class SimpleParser extends Parser {   

    static FULL_YEAR = 'yyyy';
    static SHORT_YEAR = 'yy';
    static FULL_MONTH_NAME = 'MMMM';
    static SHORT_MONTH_NAME = 'MMM';
    static FULL_MONTH = 'MM';
    static SHORT_MONTH = 'M';
    static SHORT_DAY_NAME = 'ddd';
    static FULL_DAY_NAME = 'dddd';
    static FULL_DAY = 'dd';
    static SHORT_DAY = 'd';
    static FULL_HOUR = 'HH';
    static SHORT_HOUR = 'H';
    static FULL_MINUTE = 'mm';
    static SHORT_MINUTE = 'm';
    static FULL_SECOND = 'ss';
    static SHORT_SECOND = 's';

    constructor () {
        super();
    }

    /**
     * Translate the format to the pattern
     * 
     * @param {String} format
     * 
     * @return {Object} pattern as string and sequence as string[]
     */
    translate(format) {
        let categories = {};
        let sequence = [];
        let prevChar = "";
        let currChar = "";
        let pattern = "";
        let index = 0;
        const patterns = new Map([
            [SimpleParser.FULL_YEAR, "(\\d{4})"],
            [SimpleParser.SHORT_YEAR, "(\\d{2})"],
            [SimpleParser.FULL_MONTH_NAME, "(\\D+)"],
            [SimpleParser.SHORT_MONTH_NAME, "(\\D+)"],
            [SimpleParser.FULL_MONTH, "(\\d{2})"],
            [SimpleParser.SHORT_MONTH, "(\\d{1,2})"],
            [SimpleParser.FULL_DAY_NAME, "(\\D+)"],
            [SimpleParser.SHORT_DAY_NAME, "(\\D+)"],
            [SimpleParser.FULL_DAY, "(\\d{2})"],
            [SimpleParser.SHORT_DAY, "(\\d{1,2})"],
            [SimpleParser.FULL_HOUR, "(\\d{2})"],
            [SimpleParser.SHORT_HOUR, "(\\d{1,2})"],
            [SimpleParser.FULL_MINUTE, "(\\d{2})"],
            [SimpleParser.SHORT_MINUTE, "(\\d{1,2})"],
            [SimpleParser.FULL_SECOND, "(\\d{2})"],
            [SimpleParser.SHORT_SECOND, "(\\d{1,2})"]
        ]);

        for (let i = 0; i < format.length; i++) {
            currChar = format[i];

            if (currChar === "") {
                continue;
            }

            if (currChar === prevChar) {
                const category = categories[index] ?? "";
                categories[index] = category + currChar;
            } else {
                categories[++index] = currChar;
            }

            prevChar = currChar;
        }

        for (let key in categories) {
            const value = categories[key];

            if(patterns.has(value)) {
                categories[key] = patterns.get(value);
                sequence.push(value) 
            }
        }

        pattern = Object.values(categories).join("");
        pattern = pattern.replace("/", "\/").replace(".", "\.");
        
        return {
            pattern: pattern,
            sequence: sequence
        };
    }

    /**
     * @param {String} pattern
     * @param {String} text
     * @param {Array} sequence
     * 
     * @return {Array}
     */
    match(pattern, text, sequence)
    {
        const regexp = new RegExp(pattern);
        
        if(!regexp.test(text))
        {
            return [];
        }
        
        const matches = regexp.exec(text);
        let components = {};

        for(let i = 1; i < matches.length; i++) {
            components[sequence[i - 1]] = matches[i];
        }

        return components;
    }


    /**
     * 
     * @param {String} format 
     * @param {String} text 
     */
    parse (format, text) {
        const result = this.translate(format);
        const components = this.match(result.pattern, text, result.sequence);
        const calendar = this.calendar;

        for (let key in components) {
            let value = components[key];

            switch (key) {
                case SimpleParser.FULL_YEAR:
                case SimpleParser.SHORT_YEAR:
                    calendar.setYear(+value);
                break;
                case SimpleParser.FULL_MONTH:
                case SimpleParser.SHORT_MONTH:
                    calendar.setMonth(+value);
                break;
                case SimpleParser.FULL_DAY:
                case SimpleParser.SHORT_DAY:
                    calendar.setDay(+value);
                break;
                case SimpleParser.FULL_HOUR:
                case SimpleParser.SHORT_HOUR:
                    calendar.setHour(+value);
                break;
                case SimpleParser.FULL_MINUTE:
                case SimpleParser.SHORT_MINUTE:
                    calendar.setMinute(+value);
                break;
                case SimpleParser.FULL_SECOND:
                case SimpleParser.SHORT_SECOND:
                    calendar.setSecond(+value);
                break;
                case SimpleParser.FULL_MONTH_NAME:
                    names = Pasoonate.trans(calendar.name() + ".month_name");
                    month = names.indexOf(value)

                    if(month > 0) {
                        calendar.setMonth(month);
                    }
                break;
                case SimpleParser.SHORT_MONTH_NAME:
                    names = Pasoonate.trans(calendar.name() + ".short_month_name");
                    month = names.indexOf(value);

                    if(month > 0) {
                        calendar.setMonth(month);
                    }
                break;
                case SimpleParser.FULL_DAY_NAME:
                    // names = Pasoonate.trans(calendar.name() . ".day_name");
                   
                break;
                case SimpleParser.SHORT_DAY_NAME:
                    // names = Pasoonate.trans(calendar.name() . ".short_day_name");
                    
                break;
            }
        }
    }
}

export default SimpleParser;
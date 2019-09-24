# pasoonate-js
Pasoonate is a library that includes date-time methods and calendars.

Install with [npm](https://www.npmjs.com): ```npm install pasoonate```

```
const now = Pasoonate.make();
```

```
now.gregorian().format('yyyy-MM-dd'); //2019-04-19
```

```
let datetime = now.jalali('1398/02/01 20:00:00').gregorian().getDateTime();
```

## Available calendars

- Gregorian
- Jalali
- Islamic
- Shia


## Basic methods

- getTimestamp()
- getTimezoneOffset()
- getDatetime()
- getDate()
- getTime()
- getYear()
- getMonth()
- getDay()
- getHour()
- getMinute()
- getSecond()
- getUTCDatetime()
- getUTCDate()
- getUTCTime()
- getUTCYear()
- getUTCMonth()
- getUTCDay()
- getUTCHour()
- getUTCMinute()
- getUTCSecond()
- setTimestamp(timestampAsSeconds)
- setTimezoneOffset(offsetAsMinutes)
- setDatetime(year, month, day, hour, minute, second)
- setDate(year, month, day)
- setTime(hour, minute, second)
- setYear(year)
- setMonth(month)
- setDay(day)
- setHour(hour)
- setMinute(minute)
- setSecond(second)
- setUTCDatetime(year, month, day, hour, minute, second)
- setUTCDate(year, month, day)
- setUTCTime(hour, minute, second)
- setUTCYear(year)
- setUTCMonth(month)
- setUTCDay(day)
- setUTCHour(hour)
- setUTCMinute(minute)
- setUTCSecond(second)
- dayOfWeek() `from 0 saturday to 6 friday`
- dayOfYear()
- weekOfMonth()
- weekOfYear()

## Addition and Substraction Methods

- addYear(count)
- addMonth(count)
- addDay(count)
- addHour(count)
- addMinute(count)
- addSecond(count)
- subYear(count)
- subMonth(count)
- subDay(count)
- subHour(count)
- subMinute(count)
- subSecond(count)


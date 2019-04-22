# pasoonate-js
Pasoonate is a library that includes date-time methods and calendars.

```
const now = Pasoonate.make();
```

```
now.gregorian().format('yyyy-MM-dd'); //2019-04-19
```

```
let datetime = now.jalali('1398/02/01 20:00:00').gregorian().getDateTime();
```

Available calendars:

- Gregorian
- Jalali
- Islamic
- Shia


Basic methods
-------------

- getTimestamp():number
- setTimestamp(number:timestampAsSeconds)
- getTimezoneOffset():number
- setTimezoneOffset(number:offsetAsMinutes)
- getDatetime():object
- setDatetime(year, month, day, hour, minute, second)
- getDate():object
- setDate(year, month, day)
- getTime():object
- setTime(hour, minute, second)


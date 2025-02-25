'use strict';

const Constants = {
	J1970: 2440587.5, // Julian date at Unix epoch: 1970-01-01
	Saturday: 0,
	Sunday: 1,
	Monday: 2,
	Tuesday: 3,
	Wednesday: 4,
	Thursday: 5,
	Friday: 6,
	YearsPerCentury: 100,
	YearsPerDecade: 10,
	MonthsPerYear: 12,
	WeeksPerYear: 52,
	DaysPerWeek: 7,
	HoursPerDay: 24,
	MinutesPerHour: 60,
	SecondsPerMinute: 60,
	HourInSeconds: 3600,
	DayInSeconds: 86400,
	WeekInSeconds: 604800,
	MonthInSeconds: 2629743,
	YearInSeconds: 31556926,
	MonthInDays: 30.44,
	YearInDays: 365.24,
	ShiaEpoch: 1948439.5,
	JalaliEpoch: 1948320.5,
	GregorianEpoch: 1721425.5,
	IslamicEpoch: 1948439.5,
	DaysOfIslamicYear: 354,
	DaysOfShiaYear: 354,
	DaysOfJalaliYear: 365,
	DaysOfTropicalJalaliYear: 365.24219878,
	DaysOfGregorianYear: 365,
	Gregorian: 'gregorian',
	Jalali: 'jalali',
	Shia: 'shia',
	Islamic: 'islamic'
};

export default Constants;
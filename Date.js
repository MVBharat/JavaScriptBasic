// Creating date
var date = new Date()
console.log(date)

// passing date to print in date
var date2 = new Date("December 6, 2017")
console.log(date2)

// passing seconds in date params
var date3 = new Date(1000000000000)
console.log(date3)

// passing params as  the year, month, day, hour, minute
var date4 = new Date(2019, -1, 6, 12, 5)
console.log(date4)

// get by date
console.log("Date: " + date);
console.log("getDate(): " + date.getDate());
console.log("getDay(): " + date.getDay());
console.log("getMonth(): " + date.getMonth());
console.log("getFullYear(): " + date.getFullYear());
console.log("getHours(): " + date.getHours());
console.log("getMinutes(): " + date.getMinutes());
console.log("getSeconds(): " + date.getSeconds());
console.log("getMilliseconds(): " + date.getMilliseconds());
console.log("getTime(): " + date.getTime());


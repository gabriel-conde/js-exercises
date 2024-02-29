// A program that works out whether if a given year is a leap year. 
// A normal year has 365 days, leap years have 366, with an extra day in February.

//  A year is a leap year if it is evenly divisible by 4;
// except if that year is also evenly divisible by 100;
// unless that year is also evenly divisible by 400.

function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If it's divisible by 4, check if it's also divisible by 100
        if (year % 100 === 0) {
            // If it's divisible by 100, check if it's also divisible by 400
            if (year % 400 === 0) {
                return "Leap year"; // If divisible by 400, it's a leap year
            } else {
                return "Not leap year"; // If not divisible by 400, it's not a leap year
            }
        } else {
            return "Leap year."; // If not divisible by 100 but divisible by 4, it's a leap year
        }
    } else {
        return "Not leap year."; // If not divisible by 4, it's not a leap year
    }
}
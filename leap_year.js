function isLeap(year) {
    var output;
    if (year % 4 == 0 ) {
        output = "Leap year.";
    } else if (year % 100 != 0) {
        output = "Not leap year.";
    } else if (year % 400 == 0) {
        output = "Leap year.";
    } else {
        output = year;
    }
    return output;
}
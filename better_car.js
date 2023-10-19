// I am making a keyless car EVEN BETTER!
// We are improving our car from the previous car.js exercise now.

// I made the code below have a function called checkDriverAge(). Whenever you call this function, you will get prompted for your age.
function checkDriverAge() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert ("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        alert ("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (Number(age) > 18) {
        alert ("Powering On. Enjoy the ride!");
    }
 }

// I created another function that does the same thing, called checkDriverAge2() using Function Expression.
// Also, Instead of using the prompt, I used console.log to return either messages in the console.
var checkDriverAge2 = function checkDriverAge(age) {
    if (Number(age) < 18) {
        console.log ("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        console.log ("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (Number(age) > 18) {
        console.log ("Powering On. Enjoy the ride!");
    }
 }

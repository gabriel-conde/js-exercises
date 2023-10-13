// I am making a keyless car!
// This car will only let you drive if you are over 18. It will do the following:


// using prompt() and alert(), asks a user for their age.
// IF they say they are below 18, it will respond with:
// "Sorry, you are too young to drive this car. Powering off."

// IF they say they are 18, it will respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, it will respond with:
// "Powering on. Enjoy the ride!"

var age = prompt("What is your age?");
if (Number(age < 18)) {
    alert ("Sorry you are too young to drive this car. Powering off.");
}
else if (Number(age === 18)) {
    alert ("Congratulations on your first year of driving. Enjoy the ride!");
}
else if (Number(age > 18)) {
    alert ("Powering on. Enjoy the ride!");
}
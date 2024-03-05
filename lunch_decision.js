// Function to randomly select a person to buy lunch
function whosPaying(names) {
    
    // Get the number of people in the names array
    let numberOfPeople = names.length;

    // Generate a random number between 0 and the number of people (exclusive)
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    // Select a random person from the names array using the random number generated
    let randomPerson = names[randomPersonPosition];

    // Return the chosen person who will buy lunch
    return randomPerson + " is going to buy lunch today!";
}
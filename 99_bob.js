function beer() {
    let numberOfBottles = 99;

    // Loop through the verses starting from 99 bottles down to 0 bottles
    while (numberOfBottles >= 0) {
        let bottleWord = "bottles";

        // Check if there is only one bottle left
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        } 
        // Check if there are no more bottles left
        else if (numberOfBottles === 0) {
            numberOfBottles = "no more";
            bottleWord = "bottles";
        }

        // Output the current verse
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer.");

        // Decrease the number of bottles for the next verse
        numberOfBottles--;

        // Check if there is only one bottle left or no more bottles left for the next verse
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        } 
        else if (numberOfBottles === 0) {
            numberOfBottles = "no more";
            bottleWord = "bottles";
        }

        // Output the second part of the verse
        console.log("Take one down and pass it around, " + numberOfBottles + " " + bottleWord + " of beer on the wall.");
        
        // Check if there are no more bottles left to end the song
        if (numberOfBottles === "no more") {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
    }
}

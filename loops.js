var listOfFruit = [
    "Apple",
    "Orange",
    "Grape",
    "Strawberry",
    "Blueberry",
    "Raspberry",
    "Pineapple",
    "Mango",
    "Kiwi",
    "Cherry",
    "Peach",
    "Papaya",
    "Watermelon",
    "Lemon",
    "Plum",
    "Cantaloupe",
];

var listOfFruitImportant = [
    "Apple!!",
    "Orange!!",
    "Strawberry!!",
    "Mango!!",
    "Peach!!",
    "Watermelon!!",
];
// for (var i=0; i < listOfFruit.length; i++) {
//     console.log(listOfFruit[i] , i;
// }

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

function logListOfFruit(fruit, i) {
    console.log(fruit, i);
}

listOfFruit.forEach(logListOfFruit);
listOfFruitImportant.forEach(logLisstOfFruit);
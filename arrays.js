// Using the array of 'jedi'
var jedi = ["Anakin", "Luke", "Yoda", "Obi-Wan"];

// I will...

// 1. Remove "Anakin" from the array.
jedi.shift();

// 2. Sort the array in order.
jedi.sort();

// 3. Put "Qui-Gon" at the end of the array.
jedi.push("Qui-Gon");

// 4. Remove "Luke" from the array.
jedi.splice(0, 1);

// 5. Sort the array in reverse order.
jedi.reverse();

// Using this array,
var jedi2 = ["Anakin", ["Luke", ["Yoda"], "Obi-wan"]];
// I will access "Yoda".

jedi2[1][1][0];
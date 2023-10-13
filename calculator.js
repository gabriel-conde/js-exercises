// I'm making a calculator using prompt(), and variables, I made a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. Stores that number and responds with the SUM, DIFFERENCE, PRODUCT, and QUOTIENT by using an alert.  

var first_num = prompt("enter the first number");
var second_num = prompt("enter the second number");
var sum = Number(first_num) + Number(second_num);
var difference = Number(first_num) - Number(second_num);
var product = Number(first_num) * Number(second_num);
var quotient = Number(first_num) / Number(second_num);

alert("Your sum is " + sum);
alert("Your difference is " + difference);
alert("Your product is " + product);
alert("Your quotient is " + quotient);
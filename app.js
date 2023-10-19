// Created an array of 'database' that contains an object of a user with two properties: USERNAME and PASSWORD.
var database = [
    {
        username: "Cathy",
        password: "cathy123"
    }
];

// Created an arry of 'newsFeed' that contains multiple objects of users with two properties: USERNAME and TIMELINE.
var newsfeed = [
    {
        username: "Mark",
        timeline: "Life is short, so make it sweet!"
    },
    {
        username: "Leon",
        timeline: "Smile more, worry less."
    },
    {
        username: "Elizabeth",
        timeline: "Embrace the journey, and let your path unfold before you."
    }
];

// Both prompts will ask for a users USERNAME and PASSWORD.
var usernamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");

// Created a function of 'signIn' that takes in two parameters of 'username' and 'password'.
// Depending on the users input, it will return the array of 'newsfeed' or a message.
function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsfeed);
    }
    else {
        console.log("Sorry, incorrect username and password");
    }
}

signIn(usernamePrompt, passwordPrompt);
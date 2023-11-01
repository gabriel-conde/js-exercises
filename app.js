// Created an array of 'database' that contains an object of a user with two properties: USERNAME and PASSWORD.
var database = [
    {
        username: "Cathy",
        password: "cathy123"
    },
    {
        username: "Leo",
        password: "leo123"
    },
    {
        username: "Chris",
        password: "chris123"
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
function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    }
    else {
        alert("Sorry, incorrect username and password");
    }
}

signIn(usernamePrompt, passwordPrompt);
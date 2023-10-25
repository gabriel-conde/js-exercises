// I created a twitter character counter

var tweet = prompt("Compose your tweet");
var tweetLimit = tweet.slice(0,280);

if (tweet.length < 280) {
    alert(tweet + " You have written " + (280 - tweet.length) + " characters remaining.");
}
else if (tweet.length > 280) {
    alert(tweetLimit + " You have 0 characters remaining.")
}


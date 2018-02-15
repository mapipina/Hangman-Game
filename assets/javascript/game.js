// Choose a list of words
var words = ['mickey','minnie','disney','california','florida'];

// Let computer display
/*var display = document.getElementById("current");
	display.innerHTML = words;*/

// Let computer choose random number generation
var randomWords = words[Math.floor(Math.random()*words.length)];

// create answer array -- dashes needed to hide word
var answerArray = [];
for (var i = 0; i < randomWords.length; i++) {
	answerArray[i] = "_";
};

// show dashes that are length of word
var display = document.getElementById("current");
	display.innerHTML = answerArray;
	display.innerHTML = answerArray.join(" "); 

// variable to keep track of letters that remain to be guessed
var remainingLetters = randomWords.length;



// have computer push wrong letters guessed and displayed to array
var usertext = document.getElementById("user-text");
	document.onkeyup = function(event) {
        usertext.textContent = event.key;};
	var wrongLetters = 
	var letterArray = [];
	
/*
//How many guesses are left 
var guesses=0;

var showGuesses = document.getElementById("remaining") {
	document
}


// How to show number of wins
var winsNumber = 0;
	for (var i = 0; i < Things.length; i++) {
		Things[i]
	}

*/
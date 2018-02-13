// Choose a list of words
var words = ['mickey','minnie','goofy','disney','california','florida']


// Let computer choose random number generation
function randomWords() {
	return words[Math.floor(Math.random()*words.length)];
}
// var randomWords = words[Math.floor(Math.random()*words.length)];

// Have computer generate another randomWord. We'll get back to this
for (var i=0; i < words.length; i++) {
	console.log(words[i])
}

//Let computer start game by pressing any key


//Have computer display dashes equal to the amount of letters in the random word
var makeSpaces = function(spaces) {
	var blank = "";
		for (var i = 0; i < spaces; i++) {
			blank += '_ ';
		}
	return blank;
}

//Have computer tell you how many guesses you have left. make max guesses 10
var guesses = 0;

//Have computer replace dash with correct letter


//Have computer grab letters
var guessed = document.getElementById("user-text");

//Have computer grab letters guessed and display
      document.onkeyup = function(event) {
        guessed.textContent = event.key;
      };

//Have computer inform user # of times they've won
var wins = 0;
      function updateWins() {
        document.querySelector("#wins").innerHTML = "Score: " + score;
      }

//Have computer move on to next word by displaying next set of dashes 
for (var i=0; i < words.length; i++) {
	console.log(words[i])
}

//Repeat all
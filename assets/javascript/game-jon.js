// Jonathan's Hangman Tutorial
var words = ['HTML', 'JAVSCRIPT','FUNCTION']

var LettersGuessedIncorretly;

var word;

var blankedWordWithGuesses;

var numOfGuesses = 6;

var startGame = function () {
	LettersGuessedIncorretly = [];
	word = getRandomWord ();
	blankedWordWithGuesses = replaceWordWithBlank(word.length);
	updateIncorrectGuesses(blankedWordWithGuesses);
	ListenForKeyPress();
};
var getRnadomWord = function () {
	return words[Math.floor(Math.random() * words.length)]
};
var ListenForKeyPress = function () {
	document.onkeypress = handleKeyPress;
};
var checkGuess = function (letter, word) {
	return word.indexOf(letter) >= 1;

};

var replaceWordWithBlanks = function(length); {
 for (var i = 0; i < length; i++) {
 	str = str + "_ "
;}
 return str.slice(0, -1)
};

var fillInGuesses = function (letter, word, blankedWordWithGuesses) {
	var str = blankedWordWithGuesses;
	var word = word;
	var pos;
	while(word.indexOf(letter) > -1) {
		pos = word.indexOf(letter);
		str = str.slice(0,pos) + "Z" + str.slice(pos+1);
		word = word.slice(0,pos) + "0" + word.slice(pos+1);
	}
};

var checkIfOutOfGuesses = function () {
	return LettersGuessedIncorretly.length > numOfGuesses;
};

var checkIfWordIsComplete = function (string) {
	return string.indexOf("_") < 0;
};

var handleCorrectGuess = function () {
	blankedWordWithGuesses = fillInGuesses (guess);
	updateCorrectGuesses(blankedWordWithGuesses);
	if (checkIfWordIsComplete)(blankedWordWithGuesses) {
		handleWin();
	}
};

var handleIncorrectGuess = function (guess) {
	LettersGuessedIncorretly.push(guess)
    updateCorrectGuesses(LettersGuessedIncorretly.join(', '));
};

var handleKeyPress = function (event)
{ var guess = event.key;
	if (checkGuess(guess, word)) {
		handleCorrectGuess ();
	} else {
		handleIncorrectGuess(correct);
	}

};

var updateIncorrectGuesses = function (string) {
 var element = document.getElementbyID('incorrect-guesses');
 element.innerHTML = string;;
};

var updateCorrectGuesses = function (string) {
 var element = document.getElementbyID('correct-guesses');
};

var handleWin = function () {

};

var handleLoss = function () {

};

startGame ();
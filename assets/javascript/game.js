//Top variables needed for game to work


var selectableWords =           // Word list
['mickey','minnie','disney','california','florida'];

const maxTries = 10;            // Maximum number of tries player has
var guessedLetters = [];        // Stores the letters the user guessed incorrectly 
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many guesses a player has left
var gameStarted = false;        // Alert that shows game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins the player has

// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Need a random word selected by the computer
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Defining new arrays for the guessed word
    guessedLetters = [];
    guessingWord = [];


    // Hide random word and replace with dashes
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    // 
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";

    // Show display
    updateDisplay();
};

//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};


document.onkeydown = function(event) {
    // Restart game when player has typed a new letter
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // ONLY allowing the alphabet
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};

// Replacing underscore/dash with correct letter guesses
function evaluateGuess(letter) {
    var positions = [];
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if(selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    // remove a guess when letter pressed is not in the random word 
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        hasFinished = true;
    }
};
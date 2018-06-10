# Trivia Game
A Disney twist on a classic game.

## How to Play
Take a guess at which Disney word is hidden!

## How it Works
* There is a set array of Disney words. There is a function that randomly selects which word a user has to guess.
* The following function is used to iterate through the selected word, via for loop, and replace each letter with a dash
`    for (var i = 0; i < disneyWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }`
* A const exists to give a player a max amount of tries, which is 10.
* Each letter guessed is pushed into an array and displayed on the page.
* A function iterates over the randomly selected word and if a guessed letter is exists in that word, the dash is replaced.
* The following function checks to see if the player has correctly guessed the word and adds to the wins counter:
`function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        hasFinished = true;
    }
};`
* Afterwards, the variable hasFinished is set to true, which then initiates this function:
`document.onkeydown = function(event) {
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
};`


## Technologies Used
- JavaScript
- Bootstrap


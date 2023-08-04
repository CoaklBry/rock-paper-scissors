
const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', playGame);

function playGame() {
    game();
}

function game() {

    const outputText = document.querySelector('.outputText');
    playButton.removeEventListener;
    document.getElementById('playButton').style.display = 'none';
    document.getElementById("rockButton").style.display = 'initial';
    document.getElementById("paperButton").style.display = 'initial';
    document.getElementById("scissorsButton").style.display = 'initial';
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', playRound(button.id));
        }
    );

    let winnerFound = false;
    let plWinCount = 0;
    let comWinCount = 0;
    outputText.textContent = "Choose your weapon!";
    
    while (winnerFound !== true) {
        
    

    function playRound(id) {
        const plSelection = getPlayerSelection(id);
        const comSelection = getComputerSelection();
        const roundWinner = determineRoundWinner(plSelection, comSelection);
        if (roundWinner === 'player') {plWinCount++}
            else if (roundWinner === 'computer') {comWinCount++};

        if (roundWinner === 'draw') {outputText.textContent = "It's a draw!"}
            else {
            outputText.textContent = `The winner of this round is ${roundWinner}` +
                `\nPlayer Wins: ${plWinCount  ${comWinCount}`;
            }
    }

    function getPlayerSelection(id) {
        if (id === 'rockButton') {
            return 'rock';
        } else if (id === 'scissorsButton') {
            return 'scissors';
        } else return 'paper';
    }

    //Generates a random number betweeen .01 and 1 and assigns a selection based on the outcome.
    //Returns computer selection as a string.
    function getComputerSelection() {
        let selection = 0;

        selection = Math.random();

        if (selection < .34) {
            return 'rock';
        } else if (selection >= .34 && selection < .66) {
            return 'paper';
        } else {
            return 'scissors';
        }
        return;
    }

    //Determines if the player won the current round or not.
    //Returns string stating who won or if the game was a draw.
    function determineRoundWinner(plChoice, comChoice) {
        if (
                (
                plChoice === 'scissors' && comChoice === 'paper' ||
                plChoice === 'rock' && comChoice === 'scissors' ||
                plChoice === 'paper' && comChoice === 'rock'
                )
        ) {
            return "player";
        } else if (plChoice === comChoice) {
            return "draw";
        }  else {
            return "computer";
        }     
    }

    //Checks to see if a win condition is met and ends the game if so. 
    function concludeGame(plWins, comWins) {
        
        if (plWins > comWins) {
            alert("Congrats, you win!");
        } else {
            alert("Sorry, you lose!");
        }
    }

    //Takes user input to see if they'd like to play another game.
    function newGameCheck() {

        let continueGame = null;
        while (continueGame !== true) {
            continueGame = prompt("Would you like to play again?\nY\nN").toLowerCase();

            if (continueGame === "y") {
                return true;
            } else if (continueGame === "n") {
                return false;
            }
        }
        return false;
    }

    /*
    let plWins = 0, comWins = 0;
    let plSelection = "", comSelection = "", roundWinner = "";
    do {
        plSelection = getPlayerSelection();
        comSelection = getComputerSelection();
        roundWinner = determineRoundWinner(plSelection, comSelection);

        if (roundWinner === "player") {
            plWins++;
        } else if (roundWinner === "computer") {
            comWins++;
        }
        alert("Current score\nPlayer: " + plWins + "\nComputer: " + comWins);
    } while (plWins < 5 && comWins < 5);
    concludeGame(plWins, comWins);

    if (newGameCheck()) {game()};
    alert("Thanks for playing!");
    return;
    */
}
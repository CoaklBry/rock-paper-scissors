

function game() {

    //Gets input from player for their choice in rock-paper-scissors.
    function getPlayerSelection() {

        let selection = null;
        while (selection !== 'scissors' && selection !== 'paper' && selection !== 'rock') {
            selection = (prompt("Please type a selection...\nRock\n2Paper\nScissors").toLowerCase());
        }
        return selection;
    }

    //Generates a random number betweeen .01 and 1 and assigns a selection based on the outcome.
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
    function determineRoundWinner(plChoice, comChoice, counter) {
        if (
                (
                plChoice === 'scissors' && comChoice === 'paper' ||
                plChoice === 'rock' && comChoice === 'scissors' ||
                plChoice === 'paper' && comChoice === 'rock'
                )
        ) {
            console.log("You win this round!")
            return 1;
        } else if (plChoice === comChoice) {
            console.log("It's a draw :|");
            return 0;
        }  else {
            console.log("The computer wins this round...")
            return 2;
        }     
        return;
    }

    //Checks to see if a win condition is met and ends the game if so. 
    function concludeGame(plWins, comWins) {
        
        if (plWins > comWins) {
            console.log("Congrats, you win!");
        } else {
            console.log("Sorry, you lose!");
        }
    }

    //Takes user input to see if they'd like to play another game.
    function newGameCheck() {

        let continueGame = null;
        while (continueGame !== true) {
            continueGame = prompt("Would you like to play again?/nY/nN").toLowerCase();

            if (continueGame === "y") {
                return true;
            } else if (continueGame === "n") {
                return false;
            }
        }
        return;
    }

    console.log(newGameCheck());
    return;
}
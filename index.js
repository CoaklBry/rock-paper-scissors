

function game() {

    //Gets input from player for their choice in rock-paper-scissors.
    //Returns player selection as a string.
    function getPlayerSelection() {

        let selection = null;
        while (selection !== 'scissors' && selection !== 'paper' && selection !== 'rock') {
            selection = (prompt("Please type a selection...\nRock\nPaper\nScissors").toLowerCase());
        }
        return selection;
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
            alert("You win this round!")
            return "player";
        } else if (plChoice === comChoice) {
            alert("It's a draw :|");
            return "draw";
        }  else {
            alert("The computer wins this round...")
            return "computer";
        }     
        return;
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

    alert("Welcome to Rock-Paper-Scissors!");
    alert("Play 5 rounds against the computer and see if you can win!");

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
}
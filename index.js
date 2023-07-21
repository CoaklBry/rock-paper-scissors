

function game() {

    function getPlayerSelection() {

        let selection = null;
        while (selection !== 'scissors' && selection !== 'paper' && selection !== 'rock') {
            selection = (prompt("Please type a selection...\nRock\n2Paper\nScissors").toLowerCase());
        }
        return selection;
    }

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

    function determineRoundWinner(plChoice, comChoice, counter) {
        if (
                (
                plChoice === 'scissors' && comChoice === 'paper' ||
                plChoice === 'rock' && comChoice === 'scissors' ||
                plChoice === 'paper' && comChoice === 'rock'
                )
        ) {
            console.log("You win this round!")
        } else if (plChoice === comChoice) {
            console.log("It's a draw :|");
        }  else {
            console.log("The computer wins this round...")
        }     
        return;
    }

    function concludeGame(plWins, comWins) {
        if (plWins > comWins) {
            console.log("Congrats, you win!");
        } else {
            console.log("Sorry, you lose!");
        }
        return;
    }

    concludeGame(1, 5);
    concludeGame(5, 2);
    concludeGame(4, 5);
    return;
}
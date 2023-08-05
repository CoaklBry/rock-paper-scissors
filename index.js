
const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', game);

function game() {

    const outputText = document.querySelector('.outputText');
    playButton.removeEventListener;
    document.getElementById('playButton').style.display = 'none';
    document.getElementById("rockButton").style.display = 'initial';
    document.getElementById("paperButton").style.display = 'initial';
    document.getElementById("scissorsButton").style.display = 'initial';
    let winnerFound = false, plWinCount = 0, comWinCount = 0;

    const controlButtons = document.querySelectorAll('button');
    controlButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation;
            playRound(button.id, plWinCount, comWinCount);
        });
        }
    );

    outputText.textContent = "Choose your weapon!";

    function playRound(id, plWinCount, comWinCount) {
        const plSelection = getPlayerSelection(id);
        const comSelection = getComputerSelection();
        const roundWinner = determineRoundWinner(plSelection, comSelection);
        if (roundWinner === 'player') {plWinCount++}
            else if (roundWinner === 'computer') {comWinCount++};

        if (roundWinner === 'draw') {outputText.textContent = "It's a draw!"}
            else {
            outputText.textContent = `The winner of this round is ${roundWinner}` +
                `\nPlayer Wins: ${plWinCount}  Computer Wins: ${comWinCount}`;
            }
    }

    function getPlayerSelection(id) {
        if (id === 'rockButton') {
            return 'rock';
        } else if (id === 'scissorsButton') {
            return 'scissors';
        } else return 'paper';
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

    function concludeGame(plWins, comWins) {
        
        if (plWins > comWins) {
            alert("Congrats, you win!");
        } else {
            alert("Sorry, you lose!");
        }
    }

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
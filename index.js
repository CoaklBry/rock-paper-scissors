

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

    return;
}
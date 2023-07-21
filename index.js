

function game() {

    function getPlayerSelection() {

    }

    function getComputerSelection() {
        let selection = 0;

        selection = Math.random();

        if (selection < .34) {
            return 1;
        } else if (selection >= .34 && selection < .66) {
            return 2;
        } else {
            return 3;
        }
        return;
    }

    for (let i = 0; i < 20; i++) {
        console.log(getComputerSelection());
    }
    return;
}
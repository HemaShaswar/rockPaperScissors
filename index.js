function getComputerChoice() {

    let ComputerChoice = Math.floor((Math.random()*3)+1);

    // rock = 1, paper = 2 and scissors = 3

    if (ComputerChoice === 1) {

        ComputerChoice = "rock"

    } else if (ComputerChoice === 2) {

        ComputerChoice = "paper"

    } else if (ComputerChoice === 3) {

        ComputerChoice = "scissors"

    } else {
        alert("error in getting computer choice")
    }
    return ComputerChoice;
}

function getPlayerChoice() {

    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {

        return playerChoice;
    
    } else {

        alert("invalid choice, try again.");

        playerChoice = null;

        getPlayerChoice();

    }

}


function playRound() {

    let bot = getComputerChoice();

    let player = getPlayerChoice();

    let winner;

    console.log(`Computer Choice is ${bot}.`);
    alert(`Computer Choice is ${bot}.`);

    if (player === bot) {

        winner = "nobody";

    } else if (player === "rock" && bot === "paper" || player === "paper" && bot === "scissors" || player === "scissors" && bot === "rock") {

        winner = "Computer";

    } else {

        winner = "Player";

    }

    console.log(`The winner of the round is ${winner}`);

    alert(`The winner of the round is ${winner}`);

    return winner;

}

function playGame() {

    for (let i = 0; i <= 1; i++) {

        let champ = playRound();

        if (champ === )

    }

}





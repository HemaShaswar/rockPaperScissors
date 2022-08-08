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

    if (player === "rock" && bot === "rock")

}

function playGame() {

    for (let i = 0; i <= 1; i++) {

        playRound();

    }

}





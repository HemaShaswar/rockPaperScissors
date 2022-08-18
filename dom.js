let playerChoice;
let ComputerChoice;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const choices = document.querySelectorAll('.choice button');
choices.forEach((button) => button.addEventListener('click', () => {
    playerChoice = `${button.className}`;
    decideWinner();
}));

const roundBtn = document.getElementById('round');
const gameBtn = document.getElementById('game');

function getComputerChoice() {

    ComputerChoice = Math.floor((Math.random()*3)+1);

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

function decideWinner() {

    let winner;

    getComputerChoice();

    if (playerChoice === ComputerChoice) {

        winner = "nobody";

    } else if (playerChoice === "rock" && ComputerChoice === "paper" 
    || playerChoice === "paper" && ComputerChoice === "scissors" 
    || playerChoice === "scissors" && ComputerChoice === "rock") {

        winner = "Computer";

    } else if (!playerChoice || !ComputerChoice) {

        console.log("ERROR");

        return;

    } else {

        winner = "Player";

    }
    
    console.log(`The winner of the round is ${winner}`);

    return winner;
}


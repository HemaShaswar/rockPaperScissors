// rock = 1, paper = 2 and scissors = 3

let playerChoice;
let ComputerChoice;
let result;

function getComputerChoice() {

    let ComputerChoice = Math.floor((Math.random()*3)+1);

    if (ComputerChoice === 1) {

        ComputerChoice = "rock"

    } else if (ComputerChoice === 2) {

        ComputerChoice = "paper"

    } else {

        ComputerChoice = "scissors"

    }
    return ComputerChoice;
}

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (playerChoice === "rock") {

        playerChoice = 1;
    
    } else if (playerChoice === "paper") {
    
        playerChoice = 2;
    
    } else if (playerChoice === "scissors") {
    
        playerChoice = 3;
    
    } else {
    
        alert("Choose one of rock, paper or scissors");
        playerChoice = null;
    }

    console.log(playerChoice);

}
getPlayerChoice();

function playRound(PlayerChoice, ComputerChoice) {

    getComputerChoice();

    getPlayerChoice();

    // if ( ) {
    //     result = "You Lose! Paper beats Rock"
    // } else if () {

    // } else if () {
        
    // } else if () {
        
    // }

}


if (playerChoice === "rock") {

    playerChoice = 1;

} else if (playerChoice === "paper") {

    playerChoice = 2;

} else if (playerChoice === "scissors") {

    playerChoice = 3;

} else {

    alert("Choose one of rock, paper or scissors");

    playerChoice = null;

}

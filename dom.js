let playerChoice;
let computerChoice;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const choices = document.querySelectorAll('.choice button');

const resetBtn = document.createElement('button');
resetBtn.textContent = "PLAY AGAING"
resetBtn.addEventListener("click", () => {
    roundCount.textContent = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    messenger.textContent = "PLAY A ROUND OR A GAME(FIRST TO 5)"
});

const playGround = document.querySelector('.playGround');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const roundCount = document.querySelector('.roundCount');

roundCount.textContent = 0;
playerScore.textContent = 0;
computerScore.textContent = 0;

const messenger = document.querySelector('p');

choices.forEach((button) => button.addEventListener('click', () => {
    playerChoice = `${button.className}`;
    decideWinner();
}));

const roundBtn = document.getElementById('round');
const gameBtn = document.getElementById('game');

function getcomputerChoice() {

    computerChoice = Math.floor((Math.random()*3)+1);

    if (computerChoice === 1) {

        computerChoice = "rock"

    } else if (computerChoice === 2) {

        computerChoice = "paper"

    } else if (computerChoice === 3) {

        computerChoice = "scissors"

    } else {
        alert("error in getting computer choice")
    }
    return computerChoice;
}

function decideWinner() {

    let winner;
    let champ;
    computerScore > playerScore ? champ = "COMPUTER" : champ = "PLAYER";
    if (+roundCount.textContent === 5) {

        messenger.textContent = `Game ended. ${champ} WON!`;

        playGround.appendChild(resetBtn);

        

        return;

    } else {

        ++roundCount.textContent;


    }




    getcomputerChoice();
    messenger.textContent = `PLAYER: ${playerChoice} \N COMPUTER: ${computerChoice}`;

    if (playerChoice === computerChoice) {

        winner = "nobody";

    } else if (playerChoice === "rock" && computerChoice === "paper" 
    || playerChoice === "paper" && computerChoice === "scissors" 
    || playerChoice === "scissors" && computerChoice === "rock") {

        winner = "Computer";
        computerScore.textContent++;


    } else if (!playerChoice || !computerChoice) {

        console.log("ERROR");

        return;

    } else {

        winner = "Player";
        playerScore.textContent++;

    }
    
    console.log(`The winner of the round is ${winner}`);

    return winner;
}






function getComputerChoice() {

    const choice = ["rock", "paper", "scissors"];

    const generateRandomNum = Math.floor(Math.random() * 3);

    return choice[generateRandomNum];
}

function compareChoices(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    // player wins

    if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    }

    // player loses

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    }

    // tie

    else if (playerSelection === computerSelection) {
        return `It's a tie.`
    }

}

var numOfTries = 0;
let userScore = 0;
let computerScore = 0;

function game(e) {


    if (numOfTries == 5) {
        return console.warn('Add Restart Button');
    }


    const playerSelection = this.className;


    result.textContent = compareChoices(playerSelection, getComputerChoice());

    numOfTries = numOfTries + 1;

    //updates score and tries counter
    scoreCounter.textContent = userScore;
    triesCounter.textContent = numOfTries;

    if (numOfTries == 5) {
        console.log("Game Over");

        if (userScore > computerScore) {

            result.textContent = `You win!
            Your score: ${userScore}
            Your opponent's score: ${computerScore}`;

        } else {

            result.textContent = `You Lose! Your score: ${userScore}, your opponent's score: ${computerScore}.`;
        }
    }
}

function resetGame() {
    numOfTries = 0;
    userScore = 0;
    computerScore = 0;

    scoreCounter.textContent = 0;
    triesCounter.textContent = 0;

    result.textContent = null;
}

//gets nodelist of buttons
const buttons = document.querySelectorAll('button');
//adds click event listener of each nodes in the buttons nodelist
buttons.forEach(button => button.addEventListener('click', game));

var result = document.querySelector('.result');

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);

let scoreCounter = document.querySelector('.score__counter');
let triesCounter = document.querySelector('.tries__counter');

//updates score and tries counter
scoreCounter.textContent = userScore;
triesCounter.textContent = numOfTries;




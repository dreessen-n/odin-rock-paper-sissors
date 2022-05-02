// script.js for odin - rock paper sissors

const choices = ['rock', 'paper', 'sissors'];

function computerPlay() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    const compChoice = choice.toLowerCase();
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie! Play again';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'sissors') {
            return "you win! rock beats sissors"; 
        } else if (computerselection == 'paper') {
            return "You Lose! Paper beats Rock";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == 'sissors') {
            return "You Lose! Sissors beats Paper";
        }
    } else if (playerSelection == 'sissors') {
        if (computerSelection == 'rock') {
            return "You Lose! Rock beats Sissors";
        } else if (computerSelection == 'paper') {
            return "You Win! Sissors beats Paper";
        }
    }
    console.log(playerSelection, computerSelection);
}

function game() {

}  


// write computerPlay() to get computerSelection
const computerSelection = computerPlay();

// get player selection
const pS = prompt('Please enter either: Rock, Paper or Sissors');
    playerSelection = pS.toLowerCase();

// write playRound() to play a round, return string with result
const result = playRound(playerSelection, computerSelection);
console.log(result);

// TODO: write game() to play 5 rounds of game and keep score
let playerScore = 0;
let compScore = 0;
let 
for (let i = 0; i < 5; i++) {
    
}

//   console.log(playRound(playerSelection, computerSelection));
// script.js for odin - rock paper sissors

const choices = ['Rock', 'Paper', 'Sissors'];

function computerPlay() {
   const choice = choices[Math.floor(Math.random() * choices.length)];
   const compChoice = choice.toLowerCase();
   return compChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie! Play again');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'sissors') {
           console.log("You Win! Rock beats Sissors") 
        } else if (computerSelection == 'paper') {
            console.log("You Lose! Paper beats Rock")
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log("You Win! Paper beats Rock")
        } else if (computerSelection == 'sissors') {
            console.log("You Lose! Sissors beats Paper")
        }
    } else if (playerSelection == 'sissors') {
        if (computerSelection == 'rock') {
            console.log("You Lose! Rock beats Sissors")
        } else if (computerSelection == 'paper') {
            console.log("You Win! Sissors beats Paper")
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
   console.log(playerSelection); 

// write playRound() to play a round, return string with result
const result = playRound(playerSelection, computerSelection);

// TODO: write game() to play 5 rounds of game and keep score


//   console.log(playRound(playerSelection, computerSelection));
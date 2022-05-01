// script.js for odin - rock paper sissors

const choices = ['Rock', 'Paper', 'Sissors'];

function computerPlay() {
   const choice = choices[Math.floor(Math.random() * choices.length)];
   const compChoice = choice.toLowerCase();
   return compChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie!');
    } 
    console.log(playerSelection, computerSelection);
  }
 
function game() {

}  


// write computerPlay() to get computerSelection
const computerSelection = computerPlay();

// get player selection
const pS = prompt('Please choose: Rock, Paper or Sissors');
   playerSelection = pS.toLowerCase();
   console.log(playerSelection); 

// TODO: write playRound() to play a round, return string with result
const result = playRound(playerSelection, computerSelection);

// TODO: write game() to play 5 rounds of game and keep score


//   console.log(playRound(playerSelection, computerSelection));
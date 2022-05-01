// script.js for odin - rock paper sissors

const choices = ['Rock', 'Paper', 'Sissors'];

function computerPlay() {
   const choice = choices[Math.floor(Math.random() * choices.length)];
   return choice;
}


function playRound(playerSelection, computerSelection) {
     
  }
 
function game() {

}  


// TODO: write computerPlay() to get computerSelection
const computerSelection = computerPlay();

// get player selection
const playerSelection = prompt('Please choose: Rock, Paper or Sissors');

// TODO: write playRound() to play a round, return string with result
const result = playRound(playerSelection, computerSelection);

// TODO: write game() to play 5 rounds of game and keep score


  console.log(playRound(playerSelection, computerSelection));
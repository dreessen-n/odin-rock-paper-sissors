// script.js for odin - rock paper sissors

// *** rewrite using variable instead of strings.
// const 1 = 'Tie! Play again';
// const 2 = 'You Win! Rock beats Sissors'
// ect. til all senarios are cover and then write loops

const choices = ['rock', 'paper', 'sissors'];

function computerPlay() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    const compChoice = choice.toLowerCase();
    return compChoice;
}

function playerPlay() {
    const pS = prompt('Please enter either: Rock, Paper or Sissors');
    return pS.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie! Play again';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'sissors') {
            return "you Win! Rock beats Sissors"; 
        } else if (computerSelection == 'paper') {
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
}

function roundWinner(result) {
    if (result === 'Tie, Play again') {
        return 0
    } else if (result === 'You Win! Rock beats Sissors' || 'You Win! Paper beats Rock' || 'You Win! Rock beats Sissors') {
        return 1
    } else {
        return 2
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {

        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        
        console.log(i);
        
        let result = playRound(playerSelection, computerSelection);
        let roundScore = roundWinner(result);
        console.log('round score: ' + roundScore);
        console.log('result: ' + result);
        if (roundScore == 0) {
            i -= 1;    
        } else if (roundScore == 1) {
            playerScore += 1;
        } else {
            compScore += 1;
        }
        alert(result);
    }
    if (playerScore > compScore) {
        let gap = playerScore - compScore;
        return 'Player Wins! Beats computer by ' + gap;
    } else {
        let gap = compScore - playerScore;
        return 'Computer Wins! Beats player by ' + gap;
    }
}

// write computerPlay() to get computerSelection
// const computerSelection = computerPlay();

// get player selection
// const playerSelection = playerPlay();

// write playRound() to play a round, return string with result
// const result = playRound(playerSelection, computerSelection);
// console.log(result);

// TODO: write game() to play 5 rounds of game and keep score
const gameWinner = game();
console.log(gameWinner);

// console.log(playRound(playerSelection, computerSelection));
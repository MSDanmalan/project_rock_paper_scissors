// project "Rock Paper Scissors"

let playerSelection
let computerSelection

// generate a function that will randomly return either 'rock, paper or scissors

function getComputerChoice() {
    let generateChoice = () => Math.floor(Math.random() * 3)+1

    if(generateChoice() === 1){
        return 'rock'
    }
    else if(generateChoice() === 2){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

// generate a function that plays a single round
function playRound(playerSelection = prompt('Rock Paper Scissors'), 
computerSelection = getComputerChoice()) {

   let caseInsensitive = playerSelection.toLowerCase()

    playerSelection = caseInsensitive

    if(playerSelection === computerSelection){
        return 'It\'s a tie!'
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }
    else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
             computerSelection === 'paper' && playerSelection === 'rock' ||
             computerSelection === 'scissors' && playerSelection === 'paper') {
        return `you lose ${computerSelection} beats ${playerSelection}` 
    }
};

// generate a function that play a five round game
function game() {
    for (let i = 0; i < 5; i++){
       console.log(playRound())
    }
};

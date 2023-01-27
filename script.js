// project "Rock Paper Scissors"

let playerSelection
let computerSelection
let buttonPressed
let playerScore = 0
let computerScore = 0
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
function playRound(playerSelection = buttonPressed, 
computerSelection = getComputerChoice()) {
    if (playerScore === 5 || computerScore === 5) {
        return displayWinner()
    }
    else if(playerSelection === computerSelection){
        return 'It\'s a tie!'
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
        playerResult.textContent = ++playerScore
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }
    else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
             computerSelection === 'paper' && playerSelection === 'rock' ||
             computerSelection === 'scissors' && playerSelection === 'paper') {
        computerResult.textContent = ++computerScore
        return `you lose ${computerSelection} beats ${playerSelection}`
    }
};

const result = document.querySelector('#result')
const rock = document.querySelector('#rock');
rock.classList.add('btns')
rock.addEventListener('click', () => {
        buttonPressed = ('rock')
        result.textContent = playRound(playerSelection, computerSelection)
    }
);
const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    buttonPressed = ('paper')
    result.textContent = playRound(playerSelection, computerSelection)});
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    result.textContent = playRound(playerSelection, computerSelection)
})

let playerResult = document.querySelector('#playerResult')
let computerResult = document.querySelector('#computerResult')
let finalWinner = document.querySelector('#finalWinner')

function displayWinner() {
    if(playerScore === 5){
        finalWinner.textContent = 'YOU WIN'
    }
    else if (computerScore === 5) {
        finalWinner.textContent = 'YOU LOST'
    }
}


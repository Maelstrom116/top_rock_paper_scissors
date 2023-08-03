
// Ask the player for their choice of rock, paper, or scissors; 
//      called playerSelection; lowercase the reponse

let playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?", "Rock");
let lowerPlayerSelection = playerSelection.toLowerCase();
//return lowerPlayerSelection;
console.log(lowerPlayerSelection);


// Write a function called getComputerChoice that returns 
//      a random answer of rock, paper, or scissors

const choices = [
    "rock",
    "paper",
    "scissors"
]
let getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
let computerSelection = getComputerChoice
console.log(computerSelection);
//return computerSelection;
// return (getComputerChoice);

// Compare playerSelection & getComputerChoice to identify winner
// Alert the win/loss outcome

//let counter = 0,

// var game = function() {
//     if (times < 6) {
//         return playRound.repeat(5);
    
    //for (let count = 0; count <= 5; count++) { 

function playRound(lowerPlayerSelection, computerSelection) {
    if (lowerPlayerSelection === computerSelection) {
        console.log("This is a tie!");
    } else if (lowerPlayerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Player wins!");
        alert ('win!');
    } else if (lowerPlayerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer wins!');
        alert('Computer wins!');
    } else if (lowerPlayerSelection === 'paper' && computerSelection === ' rock') {
        console.log('Player wins!');
        alert('Player wins!');
    } else if (lowerPlayerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer wins!');
        alert('Computer wins!');
    } else if (lowerPlayerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Computer wins!');
        alert('Computer wins!');
    } else if (lowerPlayerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Player wins!');
        alert('Player wins!');
    } else {
        console.log('Unrecognized response')
        alert('Unrecognized response')
    }

    

console.log(game(playRound(lowerPlayerSelection, computerSelection)));
return playRound(lowerPlayerSelection, computerSelection);
}


let playerScore = 0
let computerScore = 0

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id);
        })
    });

function computerChoice () {
    let cArray = ['rock', 'paper', 'scissors'];
    return cArray[Math.floor(Math.random() * cArray.length)]
}

function disableButtons () {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

playRound = function (pChoice) {
    let cChoice = computerChoice();
    console.log(pChoice);
    console.log(cChoice);
    let result = '';
    if (pChoice === cChoice) {
        result = ("This is a tie!");
    } else if ((pChoice == 'rock' && cChoice == 'paper') || 
               (pChoice == 'paper' && cChoice == 'scissors') ||
               (pChoice == 'scissors' && cChoice == 'rock')) {
            
            computerScore += 1
            result = ('Computer Wins!' + pChoice + ' beat ' + cChoice + "Player Score: " + playerScore + "Computer Score: " + computerScore)
            if (computerScore == 5) {
                result = ("You lose! Refresh the page.")
                disableButtons();
            }
    } else {
        playerScore += 1
        result =('You win! ' + pChoice + ' beats ' + cChoice
        + "Player score: " + playerScore + "Computer score: " + computerScore)
        if (playerScore == 5) {
            result = ("You win! Refresh the page.")
            disableButtons();
        }

        
    }
    document.getElementById('result').textContent = result
    console.log(result);
    return
}
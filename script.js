function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return 'rock'
    } else if (random === 2) {
        return 'paper'
    } else if (random === 3) {
        return 'scissors'
    };
}

function playRockPaperScissors() {
    let playerChoice = prompt("Please enter the move you play (\"Rock\",\"Paper\" or \"Scissors\")").toLowerCase();
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        return `This is a draw, you both played ${playerChoice}.`;
        //Set the if statement for loosing the game
    } else if (playerChoice === 'scissors' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors') {
        return `You loose. You played ${playerChoice} and the computer played ${computerChoice}.`
        //Set the if statement for winning the game
    } else if (computerChoice === 'scissors' && playerChoice === 'rock' || computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors') {
        return `You win! You played ${playerChoice} and the computer played ${computerChoice}.`
    } else {
        return 'Wrong input given, please try again'
    };
}
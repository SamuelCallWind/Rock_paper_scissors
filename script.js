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

function playRockPaperScissors(numberOfGames) {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (i = 0; i < numberOfGames; i++) {
        let playerChoice = prompt("Please enter the move you play (\"Rock\",\"Paper\" or \"Scissors\")").toLowerCase();
        let computerChoice = getComputerChoice();
        

        if (playerChoice === computerChoice) {
            console.log(`This is a draw, you both played ${playerChoice}.`);

            //Set the if statement for loosing the game
        } else if (playerChoice === 'scissors' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors') {
            scoreComputer++;
            console.log(`You lost this round. You played ${playerChoice} and the computer played ${computerChoice}`)

            //Set the if statement for winning the game
        } else if (computerChoice === 'scissors' && playerChoice === 'rock' || computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors') {
            scorePlayer++;
            console.log(`You won this round. You played ${playerChoice} and the computer played ${computerChoice}`)

        } else {
            console.log('Wrong input given, please try again');
        };
    }   
    
    if (scorePlayer > scoreComputer) {
        return 'Congratulations, you won!';
    } else if (scorePlayer < scoreComputer) {
        return 'Sorry, you loose.';
    } else {
        return 'The match ended in a draw';
    }
}

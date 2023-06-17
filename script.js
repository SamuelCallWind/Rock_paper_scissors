
document.addEventListener('DOMContentLoaded', function () {
    function getComputerChoice() {
        let random = Math.floor(Math.random() * 3) + 1;
        if (random === 1) {
            return 'rock';
        } else if (random === 2) {
            return 'paper';
        } else if (random === 3) {
            return 'scissors';
        };
    }
    
    // Function to remove the event listener in case there is a victory
    function gameFinished() {
        document.querySelector('.rock').removeEventListener('click', function() {
            playGame("rock")
        });
        document.querySelector('.paper').removeEventListener('click', function() {
            playGame("paper")
        });
        document.querySelector('.scissors').removeEventListener('click', function() {
            playGame("scissors")
        });

        let newDiv = document.createElement("div");
        newDiv.className = "box playAgain";
        newDiv.addEventListener('click', function () {
            document.querySelector('.rock').addEventListener('click', function() {
                playGame("rock")
            });
            document.querySelector('.paper').addEventListener('click', function() {
                playGame("paper")
            });
            document.querySelector('.scissors').addEventListener('click', function() {
                playGame("scissors")
            });
            
        })
        
    }
    
    function playGame(move) {
        let playerScore = document.querySelector(".numberScorePlayer");
        let computerScore = document.querySelector(".numberScoreComputer");
        let lastPickPlayer = document.getElementById('lastPickPlayer');
        let lastPickComputer = document.getElementById('lastPickComputer');
    
        let computerPick = getComputerChoice();
        let playerPick = move.toLowerCase();
        let resultRound = document.getElementById("resultRound");
    
        if (playerPick === computerPick) {
            resultRound.textContent = "This round is a draw";
        } else if (playerPick === 'rock' && computerPick === 'scissors' || playerPick === 'scissors' && computerPick === 'paper' || playerPick === 'paper' && computerPick === 'rock') {
            resultRound.textContent = "You won this round";
            playerScore.textContent = parseInt(playerScore.textContent) + 1
        } else if (computerPick === 'rock' && playerPick === 'scissors' || computerPick === 'scissors' && playerPick === 'paper' || computerPick === 'paper' && playerPick === 'rock') {
            resultRound.textContent = "The computer won this round";
            computerScore.textContent = parseInt(computerScore.textContent) + 1
        };

        if (parseInt(playerScore.textContent) === 5) {
            resultRound.textContent = "You won the game, congratulations !";
        }
    }
    
    
    
    document.querySelector('.rock').addEventListener('click', function() {
        playGame("rock")
    });
    document.querySelector('.paper').addEventListener('click', function() {
        playGame("paper")
    });
    document.querySelector('.scissors').addEventListener('click', function() {
        playGame("scissors")
    });
    

 });

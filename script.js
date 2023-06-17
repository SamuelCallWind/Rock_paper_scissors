
document.addEventListener('DOMContentLoaded', function () {

    let playerScore = document.querySelector(".numberScorePlayer");
    let computerScore = document.querySelector(".numberScoreComputer");
    let lastPickPlayer = document.getElementById('lastPickPlayer');
    let lastPickComputer = document.getElementById('lastPickComputer');
    
    document.querySelector('.rock').addEventListener('click', function() {
        playGame("rock");
    });
    document.querySelector('.paper').addEventListener('click', function() {
        playGame("paper");
    });
    document.querySelector('.scissors').addEventListener('click', function() {
        playGame("scissors");
    });
    
    let resultRound = document.getElementById("resultRound");
    
    
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
        let boxes = document.querySelectorAll('.box');
        boxes.forEach(function(box) {
            box.style.display = "none";
        })
        let newDiv = document.createElement("div");
        newDiv.className = "box playAgain";
        newDiv.textContent = "Play Again";
        let container = document.querySelector('.containerBoxes')
        container.appendChild(newDiv);

        //Event listener to reset every element
        newDiv.addEventListener('click', function () {
            playerScore.textContent = '0';
            computerScore.textContent = '0';
            lastPickPlayer.textContent = '';
            lastPickComputer.textContent = '';
            newDiv.remove();
            boxes.forEach(function(box) {
                box.style.display = 'flex';
            })
        })
        
    }
    
    function playGame(move) {

    
        let computerPick = getComputerChoice();
        let playerPick = move.toLowerCase();

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
            gameFinished();
        } else if (parseInt(computerScore.textContent) === 5) {
            resultRound.textContent = "The computer won the game";
            gameFinished();
    }
    
    
    
    
}

 });

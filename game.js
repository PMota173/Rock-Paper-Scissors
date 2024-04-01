function getComputerChoice() 
{
    let pick = Math.floor(Math.random() * 3);

    if (pick==0)
        return "rock";
    else if (pick==1) 
        return "paper";
    else return "scissors";
}

function playRound(playerChoice) 
{
    let computerChoice = getComputerChoice();
    if (playerChoice == "rock")
    {
        if (computerChoice == "paper")
        {
            return "COMPUTER";
        }
        else if (computerChoice == "rock")
        {
            return "TIE";
        } 
        else if (computerChoice == "scissors") 
        {
            return "PLAYER";
        }
    }
    else if (playerChoice == "paper")
    {
        if (computerChoice == "paper")
        {
            return "TIE";
        }
        else if (computerChoice == "scissors")
        {
            return "COMPUTER"
        } 
        else if (computerChoice == "rock") 
        {
            return "PLAYER";
        }
    }
    else if (playerChoice == "scissors")
    {
        if (computerChoice == "paper")
        {
            return "PLAYER";
        }
        else if (computerChoice == "scissors")
        {
            return "TIE"
        } 
        else if (computerChoice == "rock") 
        {
            return "COMPUTER";
        }
    }
}

let computerScore = 0;
let playerScore = 0;
let ties = 0;
let playerScoreDisplayed = document.querySelector(".playerPoints");
let computerScoreDisplayed = document.querySelector(".computerPoints");

let winnerOfRoundDisplayed = document.querySelector(".winnerWas");
let playerChoiceDisplayed = document.querySelector(".playerChoice");
let computerChoiceDisplayed = document.querySelector(".computerChoice");

function updateScore(winnerOfRound) 
{
    if(winnerOfRound == "COMPUTER")
    {
        return computerScore++;
    }
    else if (winnerOfRound == "PLAYER")
    {
        return playerScore++;
    }
    else 
    {
        return ties++;
    }
}
function updateScores() {
    playerScoreDisplayed.textContent = playerScore;
    computerScoreDisplayed.textContent = computerScore;
}

const playerChoiceRock = document.querySelector("#rock");
playerChoiceRock.addEventListener('click', () => {
    let winnerOfRound = playRound("rock");
    playGame(winnerOfRound);
});

const playerChoicePaper = document.querySelector("#paper");
playerChoicePaper.addEventListener('click', () => {
    let winnerOfRound = playRound("paper");
    playGame(winnerOfRound);
});

const playerChoiceScissors = document.querySelector("#scissors");
playerChoiceScissors.addEventListener('click', () => {
    let winnerOfRound = playRound("scissors");
    playGame(winnerOfRound);
});

updateScores();

function playGame(winnerOfRound)
{
    updateScore(winnerOfRound);
    updateScores();
    if (computerScore == 5)
    {
        computerScore = 0;
        playerScore = 0;
        ties = 0;
        updateScores();
        winnerOfRoundDisplayed.textContent = winnerOfRound;
    }
    else if (playerScore == 5)
    {
        computerScore = 0;
        playerScore = 0;
        ties = 0;
        updateScores();
        winnerOfRoundDisplayed.textContent = winnerOfRound;
    }
}

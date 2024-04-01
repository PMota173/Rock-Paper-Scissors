// Generates a random choice for the computer: "rock", "paper", or "scissors"
function getComputerChoice() 
{
    let pick = Math.floor(Math.random() * 3);

    // Convert the random number to a corresponding choice
    if (pick==0)
        return "rock";
    else if (pick==1) 
        return "paper";
    else return "scissors";
}

// Compares the computer's choice with the player's choice and determines the winner
function playRound(playerChoice) 
{
    let computerChoice = getComputerChoice();
    if (playerChoice == "rock")
    {
        // Determine the winner based on player and computer choices
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

// Variables used to count points and ties, and to reference elements on the web page
let computerScore = 0;
let playerScore = 0;
let ties = 0;
let playerScoreDisplayed = document.querySelector(".playerPoints");
let computerScoreDisplayed = document.querySelector(".computerPoints");

let winnerOfRoundDisplayed = document.querySelector(".winnerWas");
let playerChoiceDisplayed = document.querySelector(".playerChoice");
let computerChoiceDisplayed = document.querySelector(".computerChoice");

// Updates the scores based on the winner of the round
function updateScore(winnerOfRound) 
{
    // Increment the appropriate score or tie count
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

// Updates and displays the scores on the webpage
function updateDisplayedScores() {
    playerScoreDisplayed.textContent = "Player Score: " + playerScore;
    computerScoreDisplayed.textContent = "Computer Score: " + computerScore;
}

// Handles player choice selection and initiates a round of the game
const playerChoiceRock = document.querySelector("#rock");
playerChoiceRock.addEventListener('click', () => {
    // Play a round with the player choosing "rock"
    let winnerOfRound = playRound("rock");
    playGame(winnerOfRound);
});
const playerChoicePaper = document.querySelector("#paper");
playerChoicePaper.addEventListener('click', () => {
    // Play a round with the player choosing "paper"
    let winnerOfRound = playRound("paper");
    playGame(winnerOfRound);
});
const playerChoiceScissors = document.querySelector("#scissors");
playerChoiceScissors.addEventListener('click', () => {
    // Play a round with the player choosing "scissors"
    let winnerOfRound = playRound("scissors");
    playGame(winnerOfRound);
});

updateDisplayedScores();

// Initiates a round of the game and updates scores and display
function playGame(winnerOfRound)
{
    // Update scores and display
    updateScore(winnerOfRound);
    updateDisplayedScores();

    // Check if a player reached 5 points and declare winner
    if (computerScore == 5)
    {
        computerScore = 0;
        playerScore = 0;
        ties = 0;
        updateDisplayedScores();
        winnerOfRoundDisplayed.textContent = winnerOfRound + " WON!";
    }
    else if (playerScore == 5)
    {
        computerScore = 0;
        playerScore = 0;
        ties = 0;
        updateDisplayedScores();

        // Display the winner of the game
        winnerOfRoundDisplayed.textContent = winnerOfRound + " WON!";
    }
}

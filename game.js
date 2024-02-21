//PSEUDOCODE

// generate the computer's choice

// ask the user for their choice and store the choice
// make this case sensitive

// playRound
// compare the user's choice with the computer's
// return the winner

// playGame
// repeat the playRound function 5 times
// print who won the rounds
// return who won the game

// 0 == rock
// 1 == paper
// 2 == scissors

function getComputerChoice() 
{
    let pick = Math.floor(Math.random() * 3);

    if (pick==0)
        return "rock";
    else if (pick==1) 
        return "paper";
    else return "scissors";
}

function getPlayerChoice() 
{
    let choice = prompt("Rock Paper or Scissors?").toLowerCase();
    return choice;
}

function playRound (playerChoice,computerChoice) 
{
    if (playerChoice == "rock")
    {
        if (computerChoice == "paper")
        {
            return "computer";
        }
        else if (computerChoice == "rock")
        {
            return "tie";
        } 
        else if (computerChoice == "scissors") 
        {
            return "player";
        }
    }
    else if (playerChoice == "paper")
    {
        if (computerChoice == "paper")
        {
            return "tie";
        }
        else if (computerChoice == "scissors")
        {
            return "computer"
        } 
        else if (computerChoice == "rock") 
        {
            return "player";
        }
    }
    else if (playerChoice == "scissors")
    {
        if (computerChoice == "paper")
        {
            return "player";
        }
        else if (computerChoice == "scissors")
        {
            return "tie"
        } 
        else if (computerChoice == "rock") 
        {
            return "computer";
        }
    }
}

function playGame() 
{
    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;
    for(i=0;i<5;i++)
    {   
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        console.log("playerChoice: " + playerChoice + "\n" + "computerChoice: " + computerChoice);

        let winnerOfRound = playRound(playerChoice,computerChoice);

        if(winnerOfRound == "computer")
        {
            console.log("COMPUTER WON ROUND " + (i+1) + "!");
            computerScore+= 1;
        }
        else if (winnerOfRound == "player")
        {
            console.log("PLAYER WON ROUND " + (i+1) + "!");
            playerScore+= 1;
        }
        else 
        {
            console.log("ROUND " + (i+1) + " WAS A TIE!");
        }
    }
    if (computerScore>playerScore)
    {
        return "Computer Won!"
    }
    else if (computerScore<playerScore)
    {
        return "You Won!"
    }
    else return "It was a tie!"
}

console.log("Results: " + playGame());






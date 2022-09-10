//A function to get the computer's choice
function getComputerChoice()
{
    //Generates a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1; 
    
    //Randomly returns 'Rock', 'Paper' or 'Scissors' based on the random number
    if (randomNumber == 1)
    {
        return "Rock";
    }
    else if (randomNumber == 2)
    {
        return "Paper"
    }
    else (randomNumber == 3)
    {
        return "Scissors"
    }
}


//A function to ensure the player's choice is valid
function getPlayerChoice(answer)
{   
    //Make the first letter of the answer upper case and the rest lower
    let length = answer.length;
    let firstLetter = answer[1].toUpperCase();
    let lastPart = answer.slice(1);
    lastPart = lastPart.toLowerCase();

    //Stick the first letter and the rest together
    answer = firstLetter + lastPart;
}


//A function that plays a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection)
{
    //Results if the player chose rock
    if (playerSelection == "Rock")
    {
        if (computerSelection == "Rock")
        {   
            console.log("Both Rock! It's a tie!");
            return "Tie"
        }
        else if (computerSelection == "Paper")
        {
            console.log("Paper beats rock! You lose!");
            return "Loss"
        }
        else if (computerSelection == "Scissors")
        {
            console.log("Rock beats scissors! You win!")
            return "Win"
        }
    }

    //Results if the player chose paper
    if (playerSelection == "Paper")
    {
        if (computerSelection == "Rock")
        {
            console.log("Paper beats rock! You win!")
            return "Win"
        }
        else if (computerSelection == "Paper")
        {
            console.log("Both paper! It's a tie!")
            return "Tie"
        }
        else if (computerSelection == "Scissors")
        {
            console.log("Scissors beats paper! You lose!")
            return "Loss"
        }
    }

    //Results if the player chose scissors
    if (playerSelection == "Scissors")
    {
        if (computerSelection == "Rock")
        {
            console.log("Rock beats scissors! You lose!")
            return "Loss"
        }
        else if (computerSelection == "Paper")
        {
            console.log("Scissors beats paper! You win!")
            return "Win"
        }
        else if (computerSelection == "Scissors")
        {
            console.log("Both scissors! It's a tie!")
            return "Tie"
        }
    }
}


//Plays five rounds and announces the results at the end
function game()
{
    //Play five rounds of the game
    for(let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Rock, Paper or Scissors?")
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result == "Win")
        {
            playerScore += 1;
        }
        else if (result == "Loss")
        {
            computerScore += 1;
        }
    }

    if (playerScore > computerScore)
    {
        console.log("The player wins! Player Score: " + playerScore + ", Computer Score: " + computerScore);
    }
    else if (computerScore > playerScore)
    {
        console.log("The computer wins! Player Score: " + playerScore + ", Computer Score: " + computerScore);
    }
    else
    {
        console.log("It's a tie! You both scored: " + playerScore);
    }

    //Ask for player input if they want to play again
}


 //Creates variables for the player and computer scores
 let playerScore = 0;
 let computerScore = 0;


//Runs the game
game();


//TO DO LIST
//Make sure it works as intended  :)
//Repeat if they want to play again
//Needs to return to the start of the function if answer is invalid  
//Final check, than Git commit

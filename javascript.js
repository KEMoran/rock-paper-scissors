//STARTS A NEW GAME
function newGame()
{
    //resets everything
    playerScore = 0;
    computerScore = 0;
    playerChoice = "";

    //Reset selected boxes
    clearSelected();

    //reset text
    document.getElementById("result").innerHTML = "Which do you choose?";
    document.getElementById("result-detail").innerHTML = "The first to score 5 is the winner";

    //print new scores in the scoreboards
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;

    //add back ability to click buttons to make choices
    rockBtn.addEventListener("click", playerRock);
    paperBtn.addEventListener("click", playerPaper);
    scissorsBtn.addEventListener("click", playerScissors);

    //remove play again button 
    newGameBtn.remove();
}

//UNCLICKS SELECTED BOXES
function clearSelected()
{
    const selected = document.querySelectorAll(".selected");

    selected.forEach (select => {
        select.classList.remove("selected");
    })
}


//GETS THE COMPUTER'S CHOICE
function getComputerChoice()
{
    
    //Generates a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1; 
    
    //Randomly returns 'Rock', 'Paper' or 'Scissors' based on the random number
    if (randomNumber == 1)
    {
        document.getElementById("computer-rock").classList.add("selected");
        return "Rock";
    }
    else if (randomNumber == 2)
    {
        document.getElementById("computer-paper").classList.add("selected");
        return "Paper"
    }
    else (randomNumber == 3)
    {
        document.getElementById("computer-scissors").classList.add("selected");
        return "Scissors"
    }
}



//FUNCTIONS FOR EACH PLAYER CHOICE + TRIGGERS A ROUND

function playerRock()
{
    playerChoice = "Rock";
    playRound(playerChoice);
    rockBtn.classList.add("selected");
}

function playerPaper()
{
    playerChoice = "Paper";
    playRound(playerChoice);
    paperBtn.classList.add("selected");
}

function playerScissors()
{
    playerChoice = "Scissors";
    playRound(playerChoice);
    scissorsBtn.classList.add("selected");
}



//PLAYS A ROUND OF ROCK PAPER SCISSORS
function playRound(choice)
{
    clearSelected();

    let playerSelection = choice;
    let computerSelection = getComputerChoice();

    //Results if the player chose rock
    if (playerSelection == "Rock")
    {
        if (computerSelection == "Rock")
        {   
            document.getElementById("result").innerHTML = "It's a tie!";
            document.getElementById("result-detail").innerHTML = "Rock ties with rock";
        }
        else if (computerSelection == "Paper")
        {
            document.getElementById("result").innerHTML = "You lose!";
            document.getElementById("result-detail").innerHTML = "Paper beats rock";
            lose();
        }
        else if (computerSelection == "Scissors")
        {
            document.getElementById("result").innerHTML = "You win!";
            document.getElementById("result-detail").innerHTML = "Rock beats scissors";
            win();
        }
    }

    //Results if the player chose paper
    if (playerSelection == "Paper")
    {
        if (computerSelection == "Rock")
        {
            document.getElementById("result").innerHTML = "You win!";
            document.getElementById("result-detail").innerHTML = "Paper beats rock";
            win();
        }
        else if (computerSelection == "Paper")
        {
            document.getElementById("result").innerHTML = "It's a tie!";
            document.getElementById("result-detail").innerHTML = "Paper ties with paper";
        }
        else if (computerSelection == "Scissors")
        {
            document.getElementById("result").innerHTML = "You lose!";
            document.getElementById("result-detail").innerHTML = "Scissors beats paper";
            lose();
        }
    }

    //Results if the player chose scissors
    if (playerSelection == "Scissors")
    {
        if (computerSelection == "Rock")
        {
            document.getElementById("result").innerHTML = "You lose!";
            document.getElementById("result-detail").innerHTML = "Rock beats scissors";
            lose();
        }
        else if (computerSelection == "Paper")
        {
            document.getElementById("result").innerHTML = "You win!";
            document.getElementById("result-detail").innerHTML = "Scissors beats paper";
            win();
        }
        else if (computerSelection == "Scissors")
        {
            document.getElementById("result").innerHTML = "It's a tie!";
            document.getElementById("result-detail").innerHTML = "Scissors ties with scissors";
        }
    }

    //change this later!!!!!!!!!!!!, if either wins state the winner then ask if they want to play again
    if (playerScore == 5 || computerScore == 5)
    {
        if (playerScore == 5)
        {
            document.getElementById("result").innerHTML = "The player wins!";
        }
        else if (computerScore == 5)
        {
            document.getElementById("result").innerHTML = "The computer wins!";
            
        }
        //remove ability to click buttons
        rockBtn.removeEventListener("click", playerRock);
        paperBtn.removeEventListener("click", playerPaper);
        scissorsBtn.removeEventListener("click", playerScissors);
        //add the play again button
        document.getElementById("new-game-div").appendChild(newGameBtn);
    }   
}


//A FUNCTION FOR TIE, LOSS AND WIN?

function win()
{
    playerScore += 1;
    document.getElementById("player-score").innerHTML = playerScore;
}

function lose()
{
    computerScore += 1;
    document.getElementById("computer-score").innerHTML = computerScore;
}



//GAME SETUP

//Creates variables for the player and computer scores
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";

const rockBtn = document.getElementById("player-rock");
rockBtn.addEventListener("click", playerRock);

const paperBtn = document.getElementById("player-paper");
paperBtn.addEventListener("click", playerPaper);

const scissorsBtn = document.getElementById("player-scissors");
scissorsBtn.addEventListener("click", playerScissors);

//Creating and styling the new game button
const newGameBtn = document.createElement("button");
newGameBtn.style.backgroundColor = 'rgb(56, 56, 56)';
newGameBtn.style.color = 'white';
newGameBtn.style.fontFamily = 'Indie Flower', 'cursive';
newGameBtn.style.fontSize = '30px';
newGameBtn.style.border = '5px solid white';
newGameBtn.style.borderRadius = '10px';
newGameBtn.style.width = '175px';
newGameBtn.style.height = '75px';
newGameBtn.innerHTML = "Play again?";
newGameBtn.addEventListener("click", newGame);
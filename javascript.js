let userName = prompt("Enter your name")
const playerName = document.querySelectorAll(".userName");
playerName.forEach(element => { //get user name and replace "player" with it
    element.textContent = `${userName}`;   
});

//create a function to select randomly from rock, paper or scissors
function getComputerSelection(){
    const selections = ["rock", "paper", "scissors"];    
    return selections.at(Math.floor(Math.random() * 3));
}

let choice = "";
const rock = document.querySelector(".rock");
rock.onclick = () => playRock();

const paper = document.querySelector(".paper");
paper.onclick = () => playPaper();

const scissors = document.querySelector(".scissors");
scissors.onclick = () => playScissors();

let userScore = 0;
let compScore = 0;

const getUserScore = document.querySelector(".playerScore")
const getCompScore = document.querySelector(".computerScore")
/////////////////////////////////////////////////////////
function playRock(){
    let result = getRound("rock",getComputerSelection());

     if (result === 0){
        getCompScore.textContent = `${compScore++}`;
     }else if ( result === 1){
        getUserScore.textContent = `${userScore++}`;
     };
}

function playPaper(){
    let result = getRound("paper",getComputerSelection());

     if (result === 0){
        getCompScore.textContent = `${compScore++}`;
     }else if ( result === 1){
        getUserScore.textContent = `${userScore++}`;
     };
}

function playScissors(){
    let result = getRound("scissors",getComputerSelection());

     if (result === 0){
        getCompScore.textContent = `${compScore++}`;
     }else if ( result === 1){
        getUserScore.textContent = `${userScore++}`;
     };
}
// if get round === 1 add 1 to compScore
// if getRound === 2 add 1 to userScore
function getRound(user,computer){
    if (user === computer){
        return 2;
    }else if (user === "rock" && computer === "paper") {
        return 0;
    }else if (user === "rock" && computer === "scissors") {
        return 1;
    }else if (user === "paper" && computer === "rock") {
        return 1;
    }else if (user === "paper" && computer === "scissors") {
        return 0;
    }else if (user === "scissors" && computer === "rock") {
        return 0;
    }else if (user === "scissors" && computer === "paper") {
        return 1;
    }
}

// //create a function that gets the result of 1 round of the game
// function getRound(user,computer){
//     if (user === computer){
//         return ("it's a tie");
//     }else if (user === "rock" && computer === "paper") {
//         return ("you lose");
//     }else if (user === "rock" && computer === "scissors") {
//         return ("you win");
//     }else if (user === "paper" && computer === "rock") {
//         return ("you win");
//     }else if (user === "paper" && computer === "scissors") {
//         return ("you lose");
//     }else if (user === "scissors" && computer === "rock") {
//         return ("you lose");
//     }else if (user === "scissors" && computer === "paper") {
//         return ("you win");
//     }else {
//     return ("not a valid choice");
// }
// }

//create a function that plays 5 rounds and logs the results
function game(){

    for (let i = 0; i < 5; i++){
        const userChoice = getUserChoice();
        console.log("You chose: " + userChoice)
        const computerSelection = getComputerSelection();
        console.log("Computer chose: " + computerSelection)
        const playRound = getRound(userChoice,computerSelection);
        
        console.log(playRound);
        
        if( playRound === "you win"){
            playerScore++;
        }else if (playRound === "you lose"){
            computerScore++;
        }
        
        console.log("player: " + playerScore);
        console.log("computer: " + computerScore);
        
    }
    if (playerScore > computerScore){
        console.log("CONGRATS, You won the game")
    }else if (playerScore < computerScore){
        console.log("What a loser, you lost the game")
    }else {
        console.log("It's a tie")
    }
}

// game();
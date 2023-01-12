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


// if get round === 1 add 1 to compScore
// if getRound === 2 add 1 to userScore
function getRound(user,computer){ //0 the user loses, 1 the user wins,2 tie
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

const restart = document.querySelector(".restart")
restart.onclick = () => history.go();

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


function playRock(){
    let result = getRound("rock",getComputerSelection());

    if (compScore >= 5 || userScore >= 5) {
        alert(`Game over!!! ${userName}: ${userScore} the computer: ${compScore}`);
        history.go();
     }else if (result === 0){
        getCompScore.textContent = `${++compScore}`;
     }else if ( result === 1){
        getUserScore.textContent = `${++userScore}`;
     };
}

function playPaper(){
    let result = getRound("paper",getComputerSelection());

    if (compScore >= 5 || userScore >= 5) {
        alert(`Game over!!! ${userName}: ${userScore} the computer: ${compScore}`);
        history.go();
     }else if (result === 0){
        getCompScore.textContent = `${++compScore}`;
     }else if ( result === 1){
        getUserScore.textContent = `${++userScore}`;
     };
}

function playScissors(){
    let result = getRound("scissors",getComputerSelection());

    if (compScore >= 5 || userScore >= 5) {
        alert(`Game over!!! ${userName}: ${userScore} the computer: ${compScore}`);
        history.go();
     }else if (result === 0){
        getCompScore.textContent = `${++compScore}`;
     }else if ( result === 1){
        getUserScore.textContent = `${++userScore}`;
     };
}


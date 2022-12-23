//create a function to ask the user for an input and converts it to lower case

function getUserChoice(){   
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();  
    return choice;
}

//create a function to select randomly from rock, paper or scissors

function getComputerSelection(){
    const selections = ["rock", "paper", "scissors"];    
    return selections.at(Math.floor(Math.random() * 3));
}

//create a function that gets the result of 1 round of the game
function getRound(user,computer){
    if (user === computer){
        return ("it's a tie");
    }else if (user === "rock" && computer === "paper") {
        return ("you lose");
    }else if (user === "rock" && computer === "scissors") {
        return ("you win");
    }else if (user === "paper" && computer === "rock") {
        return ("you win");
    }else if (user === "paper" && computer === "scissors") {
        return ("you lose");
    }else if (user === "scissors" && computer === "rock") {
        return ("you lose");
    }else if (user === "scissors" && computer === "paper") {
        return ("you win");
    }else {
    return ("not a valid choice");
}
}
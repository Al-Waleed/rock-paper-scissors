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

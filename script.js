console.log("Rock, Paper, Scissors Game!")
console.log("Five rounds to decide who will be the Winner!")
console.log()

// function to create a computer selection logic, using Math.random method and a if else statements

function getComputerChoice () {
    let randomNumber = Math.random();

    if (randomNumber >= 0.7) {
        return "Rock"
    } else if (randomNumber >= 0.4 && randomNumber < 0.7) {
        return "Paper"
    } else {
        return "Scissors"
    }
}


// function to achieve human choice, using a prompt and a if else statements 

function getHumanChoice () {

    const prompt = require('prompt-sync')()
    const humanChoice = prompt("Enter your choice: Rock, Paper or Scissors: ")

    if (humanChoice == "Rock" || humanChoice == "rock") {
        return "Rock"
    } else if (humanChoice == "Paper" || humanChoice == "paper") {
        return "Paper"
    } else if (humanChoice == "Scissors" || humanChoice == "scissors") {
        return "Scissors"
    } 
}

// variables to define the players score

let humanScore = 0
let computerScore = 0


// function to play a single round, using a if else statement

function playRound (computerOption, humanOption) {

    if (computerOption == humanOption) {
        console.log(`Computer: ${computerOption}, You: ${humanOption}`)
        console.log(`Computer score: ${computerScore}, Your score: ${humanScore}. Play Again!`)
        console.log()
    } else if ((computerOption == "Rock" && humanOption == "Scissors") ||
               (computerOption == "Paper" && humanOption == "Rock") ||
               (computerOption == "Scissors" && humanOption == "Paper")) {
                computerScore += 1
                console.log(`Computer: ${computerOption}, You: ${humanOption}`)
                console.log(`Computer score: ${computerScore}, Your score: ${humanScore}. Computer Win!`)
                console.log()
               } else {
                humanScore += 1
                console.log(`Computer: ${computerOption}, You: ${humanOption}`)
                console.log(`Computer score: ${computerScore}, Your score: ${humanScore}. You Win!`)
                console.log()
               }
}


// function to make five round and defined the winner, using a loop to repeat the function palyRound() five times and a if else statements to verify if che condition are true

function playGame() {
    for (let round = 1; round <= 5; round++) {
        const humanOption = getHumanChoice();
        const computerOption = getComputerChoice();

        if(computerOption != undefined && humanOption != undefined){
        playRound(computerOption, humanOption);
        console.log(`Round ${round}: Computer score: ${computerScore}, Your score: ${humanScore}`);
        console.log()
        } else {
            console.log("Please enter one of the correct options and Play Again!")
            return
        }
    }

    if (computerScore > humanScore) {
        console.log(`Final Computer score: ${computerScore}, Your Final score: ${humanScore}`)
        console.log("Computer Win the game!")
    } else if (computerScore < humanScore) {
        console.log(`Final Computer score: ${computerScore}, Your Final score: ${humanScore}`)
        console.log("You Win the game!")
    } else if (computerOption != undefined && humanOption != undefined) {
        console.log(`Final Computer score: ${computerScore}, Your Final score: ${humanScore}`)
        console.log("It's equality! Play Again!")
    }
}

playGame()
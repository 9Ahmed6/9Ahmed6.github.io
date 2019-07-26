console.log("helloooooo");
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == 'R')
        return "Rock"
    else if (letter == 'P')
        return "Paper"
    else 
        return "Scissors"
}

function removeCss(userChoice, result) {
    if (result == "win") {
        setTimeout(function() {
            document.getElementById(userChoice).classList.remove("green-glow");
            document.querySelector(".score-board").classList.remove("green-glow");
            document.getElementById("user-label").classList.remove("background-green");
            document.getElementById("computer-label").classList.remove("background-red");
        }, 500);
    } else if (result == "lose") {
        setTimeout(function() {
            document.getElementById(userChoice).classList.remove("red-glow");
            document.querySelector(".score-board").classList.remove("red-glow");
            document.getElementById("user-label").classList.remove("background-red");
            document.getElementById("computer-label").classList.remove("background-green");
        }, 500);
    } else if (result == "draw") {
        setTimeout(function() {
            document.getElementById(userChoice).classList.remove("grey-glow");
            document.querySelector(".score-board").classList.remove("grey-glow");
        }, 500);
    }
};

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userWord = "user".fontsize(3).sub();
    const computerWord = "computer".fontsize(3).sub(); 
    result_p.innerHTML =  `${convertToWord(userChoice)}${userWord} beats ${convertToWord(computerChoice)}${computerWord}. You Win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    document.querySelector(".score-board").classList.add("green-glow");
    document.getElementById("user-label").classList.add("background-green");
    document.getElementById("computer-label").classList.add("background-red");
    removeCss(userChoice, "win");
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userWord = "user".fontsize(3).sub();
    const computerWord = "computer".fontsize(3).sub(); 
    result_p.innerHTML =  `${convertToWord(userChoice)}${userWord} loses to ${convertToWord(computerChoice)}${computerWord}. You Lose...`;
    document.getElementById(userChoice).classList.add("red-glow");
    document.querySelector(".score-board").classList.add("red-glow");
    document.getElementById("user-label").classList.add("background-red");
    document.getElementById("computer-label").classList.add("background-green");
    removeCss(userChoice, "lose");
}

function draw(userChoice, computerChoice) {
    const userWord = "user".fontsize(3).sub();
    const computerWord = "computer".fontsize(3).sub(); 
    result_p.innerHTML =  `${convertToWord(userChoice)}${userWord} equals ${convertToWord(computerChoice)}${computerWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add("grey-glow");
    document.querySelector(".score-board").classList.add("grey-glow");
    removeCss(userChoice, "draw");
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    switch (userChoice + computerChoice) {
        case "RS":
        case "PR":
        case "SP":
            win(userChoice, computerChoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            lose(userChoice, computerChoice);
            break;
        case "RR":
        case "PP":
        case "SS":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("R");
    })

    paper_div.addEventListener('click', function() {
        game("P");
    })

    scissors_div.addEventListener('click', function() {
        game("S");
    })
}

main();

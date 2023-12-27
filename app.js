let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
  };

const drawGame = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userChoice) => {
    if (userChoice) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
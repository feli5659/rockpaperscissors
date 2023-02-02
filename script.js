window.addEventListener("loaded", start());

let compNum;
let compChoice;
let userNum;
let userChoice;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// when button is clicked - it calls random number function
// userBtn.forEach((button) =>
//   button.addEventListener("click", () => {
//     randomNum();
//     userChooses();
//   })
// );

function start() {
  console.log("loaded");
}

rock.addEventListener("click", function () {
  userChoice = "rock";
  userChooses();
  randomNum();
});

paper.addEventListener("click", function () {
  userChoice = "paper";
  userChooses();
  randomNum();
});
scissors.addEventListener("click", function () {
  userChoice = "scissors";
  userChooses();
  randomNum();
});

function userChooses() {
  if (userChoice == "rock") {
    console.log("user chooses rock");
  } else if (userChoice == "paper") {
    console.log("user chooses paper");
  } else {
    console.log("user chooses scissors");
  }
  // addeventlistener to start animation when button clicked
}

function randomNum() {
  compNum = Math.floor(Math.random() * 3) + 1;
  computerChooses();
  // now add eventlistener that when animation is finished go to function computerChooses
}

function computerChooses() {
  if (compNum == 1) {
    compChoice = "rock";
  } else if (compNum == 2) {
    compChoice = "paper";
  } else if (compNum == 3) {
    compChoice = "scissors";
  }
  console.log("computer chooses " + compChoice);
  compare();
}

function compare() {
  if ((userChoice == "rock") & (compChoice == "scissors")) {
    console.log("user wins");
  }
  if ((userChoice == "scissors") & (compChoice == "rock")) {
    console.log("comp wins");
  }
  if ((userChoice == "paper") & (compChoice == "rock")) {
    console.log("user wins");
  }
  if ((userChoice == "rock") & (compChoice == "paper")) {
    console.log("comp wins");
  }
  if ((userChoice == "scissors") & (compChoice == "paper")) {
    console.log("user wins");
  }
  if ((userChoice == "paper") & (compChoice == "scissors")) {
    console.log("comp wins");
  } else if (userChoice == compChoice) {
    console.log("draw");
  }
}

// show result
// create if statements for win - lose - draw

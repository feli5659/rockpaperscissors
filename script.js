window.addEventListener("loaded", start());

let compNum;
let compChoice;
let userNum;
let userChoice;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function start() {
  console.log("loaded");
}

// when rock-button is clicked it defines the variable userChoice as rock
rock.addEventListener("click", function () {
  userChoice = "rock";
  //   remove classes and add "hidden" text
  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  //   add animations and when animation ends player 1 goes to function userChooses
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", userChooses);
  //   add animations and when animation ends player 2 goes to function randomNum
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", randomNum);
});

// when paper-button is clicked it defines the variable userChoice as paper

paper.addEventListener("click", function () {
  userChoice = "paper";
  //   remove classes and add "hidden" text
  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  //   add animations and when animation ends player 1 goes to function userChooses
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", userChooses);
  //   add animations and when animation ends player 2 goes to function randomNum
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", randomNum);
});

// when scissor-button is clicked it defines the variable userChoice as scissors

scissors.addEventListener("click", function () {
  userChoice = "scissors";
  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  //   add animations and when animation ends player 1 goes to function userChooses
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", userChooses);
  //   add animations and when animation ends player 2 goes to function randomNum
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", randomNum);
});

function userChooses() {
  // if statements that depending on choice, it stops animation shake and adds picture for the choice - rock paper or scissors
  if (userChoice == "rock") {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice == "paper") {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
  } else {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
  }
  console.log("User chooses " + userChoice);
}

// creates random number for the computer
function randomNum() {
  compNum = Math.floor(Math.random() * 3) + 1;
  computerChooses();
}

// if statements that, depending on choice, it stops animation shake and adds picture for the choice - rock paper or scissors
function computerChooses() {
  if (compNum == 1) {
    compChoice = "rock";
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
  } else if (compNum == 2) {
    compChoice = "paper";
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
  } else if (compNum == 3) {
    compChoice = "scissors";
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
  }
  console.log("computer chooses " + compChoice);
  compare();
}

function compare() {
  if ((userChoice == "rock") & (compChoice == "scissors")) {
    console.log("user wins");
    document.querySelector("#win").classList.remove("hidden");
  }
  if ((userChoice == "scissors") & (compChoice == "rock")) {
    console.log("comp wins");
    document.querySelector("#win").classList.remove("hidden");
  }
  if ((userChoice == "paper") & (compChoice == "rock")) {
    console.log("user wins");
    document.querySelector("#win").classList.remove("hidden");
  }
  if ((userChoice == "rock") & (compChoice == "paper")) {
    console.log("comp wins");
    document.querySelector("#lose").classList.remove("hidden");
  }
  if ((userChoice == "scissors") & (compChoice == "paper")) {
    console.log("user wins");
    document.querySelector("#lose").classList.remove("hidden");
  }
  if ((userChoice == "paper") & (compChoice == "scissors")) {
    console.log("comp wins");
    document.querySelector("#lose").classList.remove("hidden");
  } else if (userChoice == compChoice) {
    console.log("draw");
    document.querySelector("#draw").classList.remove("hidden");
  }
}

"use strict";
const userSelected = document.getElementById("userSelected");
const computerSelected = document.getElementById("computerSelected");
const iconContainer = document.getElementById("iconContainer");
const outputContainer = document.getElementById("outputContainer");
const message = document.getElementById("msg");

//input
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");

//global variable
let user = 0;
let computer = 0;

const init = () => {
  iconContainer.style.opacity = 1;
  outputContainer.style.display = "none";
};

const getResult = (userChoice, computerChoice) => {
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      return "DRAW";
    } else if (computerChoice === "paper") {
      return "LOST";
    } else if (computerChoice === "scissors") {
      return "WIN";
    } else if (computerChoice === "lizard") {
      return "WIN";
    } else if (computerChoice === "spock") {
      return "LOST";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "WIN";
    } else if (computerChoice === "paper") {
      return "DRAW";
    } else if (computerChoice === "scissors") {
      return "LOST";
    } else if (computerChoice === "lizard") {
      return "LOST";
    } else if (computerChoice === "spock") {
      return "WIN";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "LOST";
    } else if (computerChoice === "paper") {
      return "WIN";
    } else if (computerChoice === "scissors") {
      return "DRAW";
    } else if (computerChoice === "lizard") {
      return "WIN";
    } else if (computerChoice === "spock") {
      return "LOST";
    }
  } else if (userChoice === "lizard") {
    if (computerChoice === "rock") {
      return "LOST";
    } else if (computerChoice === "paper") {
      return "WIN";
    } else if (computerChoice === "scissors") {
      return "LOST";
    } else if (computerChoice === "lizard") {
      return "DRAW";
    } else if (computerChoice === "spock") {
      return "WIN";
    }
  } else if (userChoice === "spock") {
    if (computerChoice === "rock") {
      return "WIN";
    } else if (computerChoice === "paper") {
      return "LOST";
    } else if (computerChoice === "scissors") {
      return "WIN";
    } else if (computerChoice === "lizard") {
      return "LOST";
    } else if (computerChoice === "spock") {
      return "DRAW";
    }
  }
};

const userChoiceClick = (userChoiceName) => {
  const gameArray = ["paper", "rock", "scissors", "spock", "lizard"];
  const computerChoice = randomChoice();
  let result = getResult(userChoiceName, gameArray[computerChoice]);
  showOutput(result, userChoiceName, gameArray[computerChoice]);
};

const showOutput = (msg, userSelect, compSelect) => {
  iconContainer.style.opacity = 0;
  outputContainer.style.display = "block";
  if (msg === "WIN") {
    user++;
  } else if (msg === "LOST") {
    computer++;
  }
  message.innerText = msg;
  userScore.innerText = user;
  computerScore.innerText = computer;
  userSelected.innerText = `User Selected: ${userSelect.toUpperCase()}`;
  computerSelected.innerText = `Computer Selected: ${compSelect.toUpperCase()}`;
};

const randomChoice = () => {
  const randomNum = Math.random() * 4;
  return randomNum.toFixed();
};

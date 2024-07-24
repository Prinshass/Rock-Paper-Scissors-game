let userPoint = 0;
let computerPoint = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const userPointPara = document.querySelector("#user-point ");
const computerPointPara = document.querySelector("#computer-point");

const genComputerOption = () => {
  const choices = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx];
};

const drawGame = () => {
  msg.innerText = "Draw Game";
  msg.style.backgroundColor = "#1877F2";
};

const showWinner = (userWin, userOption, computerOption) => {
  if (userWin) {
    userPoint++;
    userPointPara.innerText = userPoint;
    msg.innerText = `congratulations You are the winner! Your ${userOption} beats ${computerOption}`;
    msg.style.backgroundColor = "#028A0F";
  } else {
    computerPoint++;
    computerPointPara.innerText = computerPoint;
    msg.innerText = `oh no better luck next time. ${computerOption} beats your ${userOption}`;
    msg.style.backgroundColor = "#D21404";
  }
};

const playGame = (userOption) => {
  //Generate computer choice
  const computerOption = genComputerOption();

  if (userOption === computerOption) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userOption === "rock") {
      //scissors, paper
      userWin = computerOption === "paper" ? false : true;
    } else if (userOption === "paper") {
      //rock, scissors
      userWin = computerOption === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = computerOption === "rock" ? false : true;
    }
    showWinner(userWin, userOption, computerOption);
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const userOption = option.getAttribute("id");
    playGame(userOption);
  });
});
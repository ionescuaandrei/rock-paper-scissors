let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.classList.add("choiceImg");
    choice.addEventListener("click", selectChoice);
    document.querySelector("#choices").append(choice);
  }
};


function selectChoice(){
  you = this.id;
  document.querySelector("#your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];

  document.querySelector("#opponent-choice").src = opponent + ".png";

  if (you === opponent) {
    yourScore++;
    opponentScore++;
  } else {
    if (you === "rock") {
      if (opponent === "scissors") {
        yourScore++;
      } else if (opponent === "paper") {
        opponentScore++;
      }
    } else if (you === "paper") {
      if (opponent === "rock") {
        yourScore++;
      } else if (opponent === "scissors") {
        opponentScore++;
      }
    } else if (you === "scissors") {
      if (opponent === "paper") {
        yourScore++;
      } else if (opponent === "rock") {
        opponentScore++;
      }
    }
  }
    document.querySelector("#opponent-score").innerText = "Zombie: " + opponentScore;
    document.querySelector("#your-score").innerText = "You: " + yourScore;
  }
  
  function reset(){
    window.location.reload();
  }
  

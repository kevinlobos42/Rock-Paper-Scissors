const icons = document.querySelectorAll(".icon");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const restart = document.getElementById("restart-btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector("#modal-content");
const scores = {
  player: 0,
  comp: 0
};

function play(e) {
  console.log(modalContent.offsetTop);
  window.scrollTo({ top: window.innerHeight / 2.5, behavior: "smooth" });
  const playerChoice = e.target.id;
  const compChoice = getCompChoice();
  const winner = getWinner(playerChoice, compChoice);
  modal.style.display = "flex";
  if (winner == "player") {
    scores.player++;
    playerScore.innerHTML = `Player: ${scores.player}`;
    modalContent.innerHTML = `
    <h1 class="title" id="win">You Win</h1>
    <i class="fas fa-hand-${compChoice} fa-10x"></i>
    <p>Computer chose ${compChoice}</p>
    `;
  } else if (winner == "comp") {
    scores.comp++;
    compScore.innerHTML = `Comp: ${scores.comp}`;
    modalContent.innerHTML = `
    <h1 class="title" id="lose">You Lose</h1>
    <i class="fas fa-hand-${compChoice} fa-10x"></i>
    <p>Computer chose ${compChoice}</p>
    `;
  } else {
    modalContent.innerHTML = `
    <h1 class="title" >Draw</h1>
    <i class="fas fa-hand-${compChoice} fa-10x"></i>
    <p>Computer chose ${compChoice}</p>
    `;
  }
}
function getCompChoice() {
  let rand = Math.floor(Math.random() * 3 + 1);
  switch (rand) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
function getWinner(player, comp) {
  if (player == comp) {
    return "draw";
  } else if (player == "rock") {
    if (comp == "paper") return "comp";
    else return "player";
  } else if (player == "paper") {
    if (comp == "scissors") return "comp";
    else return "player";
  } else if (player == "scissors") {
    if (comp == "rock") return "comp";
    else return "player";
  }
}
function modalClr(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
function restartGame() {
  scores.player = 0;
  scores.comp = 0;
  playerScore.innerHTML = `Player: 0`;
  compScore.innerHTML = `Comp: 0`;
}
icons.forEach(icon => {
  icon.addEventListener("click", play);
});
window.addEventListener("click", modalClr);
restart.addEventListener("click", restartGame);

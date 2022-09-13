let descriptionButton = document.getElementById("descriptionButton");
let instructionButton = document.getElementById("instructionButton");
let gameInfoBox = document.getElementById("gameInfo");
let highscoreTableBox = document.getElementById("highscoreTable");
let startScreen = document.getElementById("startScreen");
let changePlayer = document.getElementById("changePlayer");

const clickDescriptionButton = () => {
  descriptionButton.id = "clickedDescription";
  descriptionButton.innerHTML =
    "Today, a mysterious unidentified object<br>was sighted entering our atmosphere...<br>You are tasked by King Desmond<br>to infiltrate the foreign spacecraft! <br> <br>The presence of this gigantic UFO<br>was accompanied by<br>a massive earthquake!<br>Avoid falling debris and<br>reach the top as fast as you can!";
};
descriptionButton.addEventListener("click", clickDescriptionButton);

const clickInstructionButton = () => {
  instructionButton.id = "clickedInstructionButton";
  instructionButton.innerHTML =
    "W Key - Jump<br>A Key - Strafe Left<br>D Key - Strafe Right";
};
instructionButton.addEventListener("click", clickInstructionButton);

const updateGameInfoBoxDeath = () => {
  const results = document.createElement("p");
  highscoreTableBox.append(results);
  results.id = "results";
  results.innerHTML = `${playerNameUpperCase}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${scrollOffsetY}`;
  // gameInfoBox.innerHTML = `You died! Your score is ${scrollOffsetY}.`;
};

const updateGameInfoBoxWin = () => {
  const results = document.createElement("p");
  highscoreTableBox.append(results);
  results.id = "results";
  results.innerHTML = `${playerNameUpperCase} ESCAPED! ${scrollOffsetY}!`;
};

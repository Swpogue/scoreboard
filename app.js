let awayScore = 0
let homeScore = 0
let homePlayer = 0

function plusOneAway() {
  awayScore ++
  
  console.log("away score",awayScore);
  drawAway()
}
function plusSevenAway() {
  awayScore += 7
  
  console.log("away score",awayScore);
  drawAway()
}
function plusThreeAway() {
  awayScore += 3
  
  console.log("away score",awayScore);
  drawAway()
}


function plusOneHome() {
  homeScore ++
  
  console.log("home score",homeScore);
  drawHome()
}

function plusThreeHome() {
  homeScore += 3
  
  console.log("home score",homeScore);
  drawHome()
}

function plusSevenHome() {
  homeScore += 7
  
  console.log("home score",homeScore);
  drawHome()
}



function drawHome() {
  let hScoreElem = document.getElementById("home-score")
  hScoreElem.innerText = homeScore.toString()
  console.log('what');
  
}

function drawAway() {
  let aScoreElem = document.getElementById("away-score")
  aScoreElem.innerText = awayScore.toString()
  console.log('what');
  
}

function resetForm() {
awayScore = 0
homeScore = 0

drawHome()
drawAway()
console.log("umm");
}


















var highScores = localStorage.getItem('grade');
document.getElementById('highScores').innerHTML = highScores;
console.log(highScores);

function showScore() {
    scores = JSON.parse(highScores)
    for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);    
    console.log(score)
  }
}

function clearScores() {
  localStorage.setItem('grade') = '';
}
showScore()
var highScores = localStorage.getItem('grade');
var value = document.querySelector('#highScores');
// document.getElementById('highScores').innerHTML = highScores;
console.log(highScores);

function showScore() {
    scores = JSON.parse(highScores);

    for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.innerHTML = score;
    li.setAttribute("data-index", i);
    value.appendChild(li);
    console.log(score)
  }
}

function clearScores() {
  localStorage.setItem('grade') = '';
}
showScore()
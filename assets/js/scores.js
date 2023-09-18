var highScores = localStorage.getItem('grade');
var value = document.querySelector('#highScores');

function showScore() {

    scores = JSON.parse(highScores);
    highScores.innerHTML = '';

    for (var i = 0; i < scores.length; i++) {
    var score = JSON.stringify(Object.values(scores[i])).replace(/["\[\]]/g,'').replace(/[,]/g, ' - ' );
    var li = document.createElement("li");
    li.innerHTML = score;
    li.setAttribute("data-index", i);
    value.appendChild(li);
  }
}

function clearScores() {
  localStorage.clear()
  value.remove()
  showScore()
}
showScore()
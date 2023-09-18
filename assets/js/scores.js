var highScores = localStorage.getItem('grade');
document.getElementById('highScores').innerHTML = highScores;
console.log(highScores);

function showScore() {
    for (var i = 0; i < highScores.length; i++) {
    var score = highScores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);    
  }
}

function clearScores() {
  localStorage.setItem('grade') = '';
}
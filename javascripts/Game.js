window.onload = function() {
  startGame();
};
function startGame() {
  let counter = 0;

  this.intervalID = setInterval(() => {
    resetCanvas();
    drawGameSpace();
    userControls();
    drawPawns();
    die.drawDie();
    // checkPositionRed()
    counter++;
  }, 1000 / 60);
  
}


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {

  if (e.keyCode == "49") {
    console.log("1 was pressed");
    // This isn't triggering the grid
    matrix1.matrix[0][0] = 1;
  }
}

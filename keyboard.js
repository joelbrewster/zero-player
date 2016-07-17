
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {

  // This is the grid layout on a qwerty keyboard
  // 1234568
  // qwetryiu
  // asdfghk
  // zxcvbnm,
  // !@#$%^&*
  // QWERTYI
  // ASDFGHJK
  // ZXVCBNM<

  // ROW 0
  if (e.keyCode == "49") {
    console.log("1 was pressed");
    matrix1.matrix[0][0] = 1;
  }

  if (e.keyCode == "50") {
    console.log("2 was pressed");
    matrix1.matrix[0][1] = 1;
  }

  if (e.keyCode == "51") {
    console.log("3 was pressed");
    matrix1.matrix[0][2] = 1;
  }

  if (e.keyCode == "52") {
    console.log("4 was pressed");
    matrix1.matrix[0][3] = 1;
  }

  if (e.keyCode == "53") {
    console.log("5 was pressed");
    matrix1.matrix[0][4] = 1;
  }

  if (e.keyCode == "54") {
    console.log("6 was pressed");
    matrix1.matrix[0][5] = 1;
  }

  if (e.keyCode == "55") {
    console.log("7 was pressed");
    matrix1.matrix[0][6] = 1;
  }

  if (e.keyCode == "56") {
    console.log("8 was pressed");
    matrix1.matrix[0][7] = 1;
  }


  //Row 2
  if (e.keyCode == "81") {
    console.log("q was pressed");
    // This isn't triggering the grid
    matrix1.matrix[0][1] = 1;
  }

  //Row 3

  //Row 4

  //Row5 shift

  //Row6 shift

  //Row7 shift

  //Row8 shift

}

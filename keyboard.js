// Keyboard input
//0 - 123456777
Mousetrap.bind('1', function() {
  matrix1.matrix[0][0] = 1;
  matrix1.setCell(0,0,true);
  matrix1.val = "1 pressed";
  // matrix1.matrix[0][1] = 1;
  // matrix1.matrix[1][0] = 1;
  // matrix1.matrix[0][1] = 1;
  // console.log("1 pressed");
});

Mousetrap.bind('2', function() {
  matrix1.matrix[1][0] = 1;
  matrix1.setCell(1,0, true);
  // matrix1.matrix[1][1] = 1;
  // matrix1.matrix[2][0] = 1;
  // matrix1.matrix[1][1] = 1;
  // console.log("2 pressed");
});

Mousetrap.bind('3', function() {
  matrix1.matrix[2][0] = 1;
  matrix1.setCell(2,0, true);
  // matrix1.matrix[2][1] = 1;
  // matrix1.matrix[3][0] = 1;
  // matrix1.matrix[2][1] = 1;
  // console.log("3 pressed");
});

Mousetrap.bind('4', function() {
  matrix1.matrix[3][0] = 1;
  matrix1.setCell(3,0, true);
  // matrix1.matrix[3][1] = 1;
  // matrix1.matrix[4][0] = 1;
  // matrix1.matrix[3][1] = 1;
  // console.log("4 pressed");
});

Mousetrap.bind('5', function() {
  matrix1.matrix[4][0] = 1;
  matrix1.setCell(4,0, true);
  // matrix1.matrix[4][1] = 1;
  // matrix1.matrix[5][0] = 1;
  // matrix1.matrix[4][1] = 1;
  // console.log("5 pressed");
});

Mousetrap.bind('6', function() {
  matrix1.matrix[5][0] = 1;
  matrix1.setCell(5,0, true);
  // matrix1.matrix[5][1] = 1;
  // matrix1.matrix[6][0] = 1;
  // matrix1.matrix[5][1] = 1;
  // console.log("6 pressed");
});

Mousetrap.bind('7', function() {
  matrix1.matrix[6][0] = 1;
  matrix1.setCell(6,0, true);
  // matrix1.matrix[6][1] = 1;
  // matrix1.matrix[7][0] = 1;
  // matrix1.matrix[6][1] = 1;
  // console.log("7 pressed");
});

Mousetrap.bind('8', function() {
  matrix1.matrix[7][0] = 1;
  matrix1.setCell(7,0, true);
  // matrix1.matrix[7][1] = 1;
  // matrix1.matrix[6][0] = 1;
  // matrix1.matrix[7][1] = 1;
  // console.log("8 pressed");
});

//1 - qwertyui
Mousetrap.bind('q', function() {
  matrix1.matrix[0][1] = 1;
  matrix1.setCell(0,1, true);
  // matrix1.matrix[0][2] = 1;
  // matrix1.matrix[1][1] = 1;
  // matrix1.matrix[0][2] = 1;
  // console.log("q pressed");
});

Mousetrap.bind('w', function() {
  matrix1.matrix[1][1] = 1;
  matrix1.setCell(1,1, true);
  // matrix1.matrix[2][1] = 1;
  // matrix1.matrix[2][1] = 1;
  // matrix1.matrix[1][2] = 1;
  // console.log("w pressed");
});

Mousetrap.bind('e', function() {
  matrix1.matrix[2][1] = 1;
  matrix1.setCell(2,1, true);
  // matrix1.matrix[2][2] = 1;
  // matrix1.matrix[3][1] = 1;
  // matrix1.matrix[2][2] = 1;
  // console.log("e pressed");
});

Mousetrap.bind('r', function() {
  matrix1.matrix[3][1] = 1;
  matrix1.setCell(3,1, true);
  // matrix1.matrix[3][2] = 1;
  // matrix1.matrix[4][1] = 1;
  // matrix1.matrix[3][2] = 1;
  // console.log("r pressed");
});

Mousetrap.bind('t', function() {
  matrix1.matrix[4][1] = 1;
  matrix1.setCell(4,1, true);
  // matrix1.matrix[4][2] = 1;
  // matrix1.matrix[5][1] = 1;
  // matrix1.matrix[4][2] = 1;
  // console.log("t pressed");
});

Mousetrap.bind('y', function() {
  matrix1.matrix[5][1] = 1;
  matrix1.setCell(5,1, true);
  // matrix1.matrix[5][2] = 1;
  // matrix1.matrix[6][1] = 1;
  // matrix1.matrix[5][2] = 1;
  // console.log("y pressed");
});

Mousetrap.bind('u', function() {
  matrix1.matrix[6][1] = 1;
  matrix1.setCell(6,1, true);
  // matrix1.matrix[6][2] = 1;
  // matrix1.matrix[7][1] = 1;
  // matrix1.matrix[6][2] = 1;
  // console.log("u pressed");
});

Mousetrap.bind('i', function() {
  matrix1.matrix[7][1] = 1;
  matrix1.setCell(7,1, true);
  // matrix1.matrix[7][2] = 1;
  // matrix1.matrix[7][1] = 1;
  // matrix1.matrix[7][2] = 1;
  // console.log("i pressed");
});

//2 - asdfghkj
Mousetrap.bind('a', function() {
  matrix1.matrix[0][2] = 1;
  matrix1.setCell(0,2, true);
  // matrix1.matrix[0][3] = 1;
  // matrix1.matrix[1][2] = 1;
  // matrix1.matrix[0][3] = 1;
  // console.log("a pressed");
});

Mousetrap.bind('s', function() {
  matrix1.matrix[1][2] = 1;
  matrix1.setCell(1,2, true);
  // matrix1.matrix[1][3] = 1;
  // matrix1.matrix[2][2] = 1;
  // matrix1.matrix[1][3] = 1;
  // console.log("s pressed");
});

Mousetrap.bind('d', function() {
  matrix1.matrix[2][2] = 1;
  matrix1.setCell(2,2, true);
  // matrix1.matrix[2][3] = 1;
  // matrix1.matrix[3][2] = 1;
  // matrix1.matrix[2][3] = 1;
  // console.log("d pressed");
});

Mousetrap.bind('f', function() {
  matrix1.matrix[3][2] = 1;
  matrix1.setCell(3,2, true);
  // matrix1.matrix[3][3] = 1;
  // matrix1.matrix[4][2] = 1;
  // matrix1.matrix[3][3] = 1;
  // console.log("f pressed");
});

Mousetrap.bind('g', function() {
  matrix1.matrix[4][2] = 1;
  matrix1.setCell(4,2, true);
  // matrix1.matrix[4][3] = 1;
  // matrix1.matrix[5][2] = 1;
  // matrix1.matrix[4][3] = 1;
  // console.log("g pressed");
});

Mousetrap.bind('h', function() {
  matrix1.matrix[5][2] = 1;
  matrix1.setCell(5,2, true);
  // matrix1.matrix[5][3] = 1;
  // matrix1.matrix[6][2] = 1;
  // matrix1.matrix[5][3] = 1;
  // console.log("h pressed");
});

Mousetrap.bind('j', function() {
  matrix1.matrix[6][2] = 1;
  matrix1.setCell(6,2, true);
  // matrix1.matrix[6][3] = 1;
  // matrix1.matrix[7][2] = 1;
  // matrix1.matrix[6][3] = 1;
  // console.log("j pressed");
});

Mousetrap.bind('k', function() {
  matrix1.matrix[7][2] = 1;
  matrix1.setCell(7,2, true);
  // matrix1.matrix[7][3] = 1;
  // matrix1.matrix[7][2] = 1;
  // matrix1.matrix[7][3] = 1;
  // console.log("k pressed");
});

//3 - zxcvbnm,
Mousetrap.bind('z', function() {
  matrix1.matrix[0][3] = 1;
  matrix1.setCell(0,3, true);
  // matrix1.matrix[0][4] = 1;
  // matrix1.matrix[1][3] = 1;
  // matrix1.matrix[0][4] = 1;
  // console.log("z pressed");
});

Mousetrap.bind('x', function() {
  matrix1.matrix[1][3] = 1;
  matrix1.setCell(1,3, true);
  // matrix1.matrix[1][4] = 1;
  // matrix1.matrix[2][3] = 1;
  // matrix1.matrix[1][4] = 1;
  // console.log("x pressed");
});

Mousetrap.bind('c', function() {
  matrix1.matrix[2][3] = 1;
  matrix1.setCell(2,3, true);
  // matrix1.matrix[2][4] = 1;
  // matrix1.matrix[3][3] = 1;
  // matrix1.matrix[2][4] = 1;
  // console.log("c pressed");
});

Mousetrap.bind('v', function() {
  matrix1.matrix[3][3] = 1;
  matrix1.setCell(3,3, true);
  // matrix1.matrix[3][4] = 1;
  // matrix1.matrix[4][3] = 1;
  // matrix1.matrix[3][4] = 1;
  // console.log("v pressed");
});

Mousetrap.bind('b', function() {
  matrix1.matrix[4][3] = 1;
  matrix1.setCell(4,3, true);
  // matrix1.matrix[4][4] = 1;
  // matrix1.matrix[5][3] = 1;
  // matrix1.matrix[4][4] = 1;
  // console.log("b pressed");
});

Mousetrap.bind('n', function() {
  matrix1.matrix[5][3] = 1;
  matrix1.setCell(5,3, true);
  // matrix1.matrix[5][4] = 1;
  // matrix1.matrix[6][3] = 1;
  // matrix1.matrix[5][4] = 1;
  // console.log("n pressed");
});

Mousetrap.bind('m', function() {
  matrix1.matrix[6][3] = 1;
  matrix1.setCell(6,3, true);
  // matrix1.matrix[6][4] = 1;
  // matrix1.matrix[7][3] = 1;
  // matrix1.matrix[6][4] = 1;
  // console.log("m pressed");
});

Mousetrap.bind(',', function() {
  matrix1.matrix[7][3] = 1;
  matrix1.setCell(7,3, true);
  // matrix1.matrix[7][4] = 1;
  // matrix1.matrix[7][3] = 1;
  // matrix1.matrix[7][4] = 1;
  // console.log(", pressed");
});

//4 - !@#$%^&*
Mousetrap.bind('!', function() {
  matrix1.matrix[0][4] = 1;
  matrix1.setCell(0,4, true);
  // matrix1.matrix[0][5] = 1;
  // matrix1.matrix[1][4] = 1;
  // matrix1.matrix[0][5] = 1;
  // console.log("! pressed");
});

Mousetrap.bind('@', function() {
  matrix1.matrix[1][4] = 1;
  matrix1.setCell(1,4, true);
  // matrix1.matrix[1][5] = 1;
  // matrix1.matrix[2][4] = 1;
  // matrix1.matrix[1][5] = 1;
  // console.log("@ pressed");
});

Mousetrap.bind('#', function() {
  matrix1.matrix[2][4] = 1;
  matrix1.setCell(2,4, true);
  // matrix1.matrix[2][5] = 1;
  // matrix1.matrix[3][4] = 1;
  // matrix1.matrix[2][5] = 1;
  // console.log("# pressed");
});

Mousetrap.bind('$', function() {
  matrix1.matrix[3][4] = 1;
  matrix1.setCell(3,4, true);
  // matrix1.matrix[3][5] = 1;
  // matrix1.matrix[4][4] = 1;
  // matrix1.matrix[3][5] = 1;
  // console.log("$ pressed");
});

Mousetrap.bind('%', function() {
  matrix1.matrix[4][4] = 1;
  matrix1.setCell(4,4, true);
  // matrix1.matrix[4][5] = 1;
  // matrix1.matrix[5][4] = 1;
  // matrix1.matrix[4][5] = 1;
  // console.log("% pressed");
});

Mousetrap.bind('^', function() {
  matrix1.matrix[5][4] = 1;
  matrix1.setCell(5,4, true);
  // matrix1.matrix[5][5] = 1;
  // matrix1.matrix[6][4] = 1;
  // matrix1.matrix[5][5] = 1;
  // console.log("^ pressed");
});

Mousetrap.bind('&', function() {
  matrix1.matrix[6][4] = 1;
  matrix1.setCell(6,4, true);
  // matrix1.matrix[6][5] = 1;
  // matrix1.matrix[7][4] = 1;
  // matrix1.matrix[6][5] = 1;
  // console.log("& pressed");
});

Mousetrap.bind('*', function() {
  matrix1.matrix[7][4] = 1;
  matrix1.setCell(7,4, true);
  // matrix1.matrix[7][5] = 1;
  // matrix1.matrix[7][4] = 1;
  // matrix1.matrix[7][5] = 1;
  // console.log("* pressed");
});

//5 - QWERTYUI
Mousetrap.bind('shift+q', function() {
  matrix1.matrix[0][5] = 1;
  matrix1.setCell(0,5, true);
  // matrix1.matrix[0][6] = 1;
  // matrix1.matrix[1][5] = 1;
  // matrix1.matrix[0][6] = 1;
  // console.log("shift+q pressed");
});

Mousetrap.bind('shift+w', function() {
  matrix1.matrix[1][5] = 1;
  matrix1.setCell(1,5, true);
  // matrix1.matrix[1][6] = 1;
  // matrix1.matrix[2][5] = 1;
  // matrix1.matrix[1][6] = 1;
  // console.log("shift+w pressed");
});

Mousetrap.bind('shift+e', function() {
  matrix1.matrix[2][5] = 1;
  matrix1.setCell(2,5, true);
  // matrix1.matrix[2][6] = 1;
  // matrix1.matrix[3][5] = 1;
  // matrix1.matrix[2][6] = 1;
  // console.log("shift+e pressed");
});

Mousetrap.bind('shift+r', function() {
  matrix1.matrix[3][5] = 1;
  matrix1.setCell(3,5, true);
  // matrix1.matrix[3][6] = 1;
  // matrix1.matrix[4][5] = 1;
  // matrix1.matrix[3][6] = 1;
  // console.log("shift+r pressed");
});

Mousetrap.bind('shift+t', function() {
  matrix1.matrix[4][5] = 1;
  matrix1.setCell(4,5, true);
  // matrix1.matrix[4][6] = 1;
  // matrix1.matrix[5][5] = 1;
  // matrix1.matrix[4][6] = 1;
  // console.log("shift+t pressed");
});

Mousetrap.bind('shift+y', function() {
  matrix1.matrix[5][5] = 1;
  matrix1.setCell(5,5, true);
  // matrix1.matrix[5][6] = 1;
  // matrix1.matrix[6][5] = 1;
  // matrix1.matrix[5][6] = 1;
  // console.log("shift+y pressed");
});

Mousetrap.bind('shift+u', function() {
  matrix1.matrix[6][5] = 1;
  matrix1.setCell(6,5, true);
  // matrix1.matrix[6][6] = 1;
  // matrix1.matrix[7][5] = 1;
  // matrix1.matrix[6][6] = 1;
  // console.log("shift+u pressed");
});

Mousetrap.bind('shift+i', function() {
  matrix1.matrix[7][5] = 1;
  matrix1.setCell(7,5, true);
  // matrix1.matrix[7][6] = 1;
  // matrix1.matrix[7][5] = 1;
  // matrix1.matrix[7][6] = 1;
  // console.log("shift+i pressed");
});

//6 - ASDFGHKJ
Mousetrap.bind('shift+a', function() {
  matrix1.matrix[0][6] = 1;
  matrix1.setCell(0,6, true);
  // matrix1.matrix[0][7] = 1;
  // matrix1.matrix[1][6] = 1;
  // matrix1.matrix[0][7] = 1;
  // console.log("shift+a pressed");
});

Mousetrap.bind('shift+s', function() {
  matrix1.matrix[1][6] = 1;
  matrix1.setCell(1,6, true);
  // matrix1.matrix[1][7] = 1;
  // matrix1.matrix[2][6] = 1;
  // matrix1.matrix[1][7] = 1;
  // console.log("shift+s pressed");
});

Mousetrap.bind('shift+d', function() {
  matrix1.matrix[2][6] = 1;
  matrix1.setCell(2,6, true);
  // matrix1.matrix[2][7] = 1;
  // matrix1.matrix[3][6] = 1;
  // matrix1.matrix[2][7] = 1;
  // console.log("shift+d pressed");
});

Mousetrap.bind('shift+f', function() {
  matrix1.matrix[3][6] = 1;
  matrix1.setCell(3,6, true);
  // matrix1.matrix[3][7] = 1;
  // matrix1.matrix[4][6] = 1;
  // matrix1.matrix[3][7] = 1;
  // console.log("shift+f pressed");
});

Mousetrap.bind('shift+g', function() {
  matrix1.matrix[4][6] = 1;
  matrix1.setCell(4,6, true);
  // matrix1.matrix[4][7] = 1;
  // matrix1.matrix[5][6] = 1;
  // matrix1.matrix[4][7] = 1;
  // console.log("shift+g pressed");
});

Mousetrap.bind('shift+h', function() {
  matrix1.matrix[5][6] = 1;
  matrix1.setCell(5,6, true);
  // matrix1.matrix[5][7] = 1;
  // matrix1.matrix[6][6] = 1;
  // matrix1.matrix[5][7] = 1;
  // console.log("shift+h pressed");
});

Mousetrap.bind('shift+j', function() {
  matrix1.matrix[6][6] = 1;
  matrix1.setCell(6,6, true);
  // matrix1.matrix[6][7] = 1;
  // matrix1.matrix[7][6] = 1;
  // matrix1.matrix[6][7] = 1;
  // console.log("shift+j pressed");
});

Mousetrap.bind('shift+k', function() {
  matrix1.matrix[7][6] = 1;
  matrix1.setCell(7,6, true);
  // matrix1.matrix[7][7] = 1;
  // matrix1.matrix[7][6] = 1;
  // matrix1.matrix[7][7] = 1;
  // console.log("shift+k pressed");
});

//7 - ZXCVBNM<
Mousetrap.bind('shift+z', function() {
  matrix1.matrix[0][7] = 1;
  matrix1.setCell(0,7, true);
  // matrix1.matrix[1][7] = 1;
  // matrix1.matrix[1][7] = 1;
  // matrix1.matrix[0][6] = 1;
  // console.log("shift+z pressed");
});

Mousetrap.bind('shift+x', function() {
  matrix1.matrix[1][7] = 1;
  matrix1.setCell(1,7, true);
  // matrix1.matrix[2][7] = 1;
  // matrix1.matrix[2][7] = 1;
  // matrix1.matrix[1][6] = 1;
  // console.log("shift+x pressed");
});

Mousetrap.bind('shift+c', function() {
  matrix1.matrix[2][7] = 1;
  matrix1.setCell(2,7, true);
  // matrix1.matrix[3][7] = 1;
  // matrix1.matrix[3][7] = 1;
  // matrix1.matrix[2][6] = 1;
  // console.log("shift+c pressed");
});

Mousetrap.bind('shift+v', function() {
  matrix1.matrix[3][7] = 1;
  matrix1.setCell(3,7, true);
  // matrix1.matrix[4][7] = 1;
  // matrix1.matrix[4][7] = 1;
  // matrix1.matrix[3][6] = 1;
  // console.log("shift+v pressed");
});

Mousetrap.bind('shift+b', function() {
  matrix1.matrix[4][7] = 1;
  matrix1.setCell(4,7, true);
  // matrix1.matrix[5][7] = 1;
  // matrix1.matrix[5][7] = 1;
  // matrix1.matrix[4][6] = 1;
  // console.log("shift+b pressed");
});

Mousetrap.bind('shift+n', function() {
  matrix1.matrix[5][7] = 1;
  matrix1.setCell(5,7, true);
  // matrix1.matrix[6][7] = 1;
  // matrix1.matrix[6][7] = 1;
  // matrix1.matrix[5][6] = 1;
  // console.log("shift+n pressed");
});

Mousetrap.bind('shift+m', function() {
  matrix1.matrix[6][7] = 1;
  matrix1.setCell(6,7, true);
  // matrix1.matrix[7][7] = 1;
  // matrix1.matrix[7][7] = 1;
  // matrix1.matrix[6][6] = 1;
  // console.log("shift+m pressed");
});

Mousetrap.bind('<', function() {
  matrix1.matrix[7][7] = 1;
  matrix1.setCell(7,7, true);
  // matrix1.matrix[6][7] = 1;
  // matrix1.matrix[7][6] = 1;
  // console.log("< pressed");
});

Mousetrap.bind('?', function() {
  vex.dialog.alert('Hi, try these shapes. <br> <img src="http://placehold.it/420x320" alt="Patterns" />');
});

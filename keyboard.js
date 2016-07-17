// Keyboard input
//0 - 123456778
Mousetrap.bind('1', function() {
    matrix1.matrix[0][0] = 1;
    matrix1.matrix[0][1] = 1;
    matrix1.matrix[1][0] = 1;
    console.log("1 pressed");
});

Mousetrap.bind('2', function() {
    matrix1.matrix[0][1] = 1;
    matrix1.matrix[0][2] = 1;
    matrix1.matrix[1][1] = 1;
    console.log("2 pressed");
});

Mousetrap.bind('3', function() {
    matrix1.matrix[0][2] = 1;
    matrix1.matrix[0][3] = 1;
    matrix1.matrix[1][2] = 1;
    console.log("3 pressed");
});

Mousetrap.bind('4', function() {
    matrix1.matrix[0][3] = 1;
    matrix1.matrix[0][4] = 1;
    matrix1.matrix[1][3] = 1;
    console.log("4 pressed");
});

Mousetrap.bind('5', function() {
    matrix1.matrix[0][4] = 1;
    matrix1.matrix[0][5] = 1;
    matrix1.matrix[1][4] = 1;
    console.log("5 pressed");
});

Mousetrap.bind('6', function() {
    matrix1.matrix[0][5] = 1;
    matrix1.matrix[0][6] = 1;
    matrix1.matrix[1][5] = 1;
    console.log("6 pressed");
});

Mousetrap.bind('7', function() {
    matrix1.matrix[0][6] = 1;
    matrix1.matrix[0][7] = 1;
    matrix1.matrix[1][6] = 1;
    console.log("7 pressed");
});

Mousetrap.bind('8', function() {
    matrix1.matrix[0][7] = 1;
    matrix1.matrix[0][8] = 1;
    matrix1.matrix[1][7] = 1;
    console.log("8 pressed");
});

//1 - qwertyui
Mousetrap.bind('q', function() {
    matrix1.matrix[1][0] = 1;
    matrix1.matrix[1][1] = 1;
    matrix1.matrix[2][0] = 1;
    console.log("q pressed");
});

Mousetrap.bind('w', function() {
    matrix1.matrix[1][1] = 1;
    matrix1.matrix[1][2] = 1;
    matrix1.matrix[2][1] = 1;
    console.log("w pressed");
});

Mousetrap.bind('e', function() {
    matrix1.matrix[1][2] = 1;
    matrix1.matrix[1][3] = 1;
    matrix1.matrix[2][2] = 1;
    console.log("e pressed");
});

Mousetrap.bind('r', function() {
    matrix1.matrix[1][3] = 1;
    matrix1.matrix[1][4] = 1;
    matrix1.matrix[2][3] = 1;
    console.log("r pressed");
});

Mousetrap.bind('t', function() {
    matrix1.matrix[1][4] = 1;
    matrix1.matrix[1][5] = 1;
    matrix1.matrix[2][4] = 1;
    console.log("t pressed");
});

Mousetrap.bind('y', function() {
    matrix1.matrix[1][5] = 1;
    matrix1.matrix[1][6] = 1;
    matrix1.matrix[2][5] = 1;
    console.log("y pressed");
});

Mousetrap.bind('u', function() {
    matrix1.matrix[1][6] = 1;
    matrix1.matrix[1][7] = 1;
    matrix1.matrix[2][6] = 1;
    console.log("u pressed");
});

Mousetrap.bind('i', function() {
    matrix1.matrix[1][7] = 1;
    matrix1.matrix[1][8] = 1;
    matrix1.matrix[2][7] = 1;
    console.log("i pressed");
});

//2 - asdfghkj
Mousetrap.bind('a', function() {
    matrix1.matrix[2][0] = 1;
    console.log("a pressed");
});

Mousetrap.bind('s', function() {
    matrix1.matrix[2][1] = 1;
    console.log("s pressed");
});

Mousetrap.bind('d', function() {
    matrix1.matrix[2][2] = 1;
    console.log("d pressed");
});

Mousetrap.bind('f', function() {
    matrix1.matrix[2][3] = 1;
    console.log("f pressed");
});

Mousetrap.bind('g', function() {
    matrix1.matrix[2][4] = 1;
    console.log("g pressed");
});

Mousetrap.bind('h', function() {
    matrix1.matrix[2][5] = 1;
    console.log("h pressed");
});

Mousetrap.bind('j', function() {
    matrix1.matrix[2][6] = 1;
    console.log("j pressed");
});

Mousetrap.bind('k', function() {
    matrix1.matrix[2][7] = 1;
    console.log("k pressed");
});


//3 - zxcvbnm,
Mousetrap.bind('z', function() {
    matrix1.matrix[3][0] = 1;
    console.log("z pressed");
});

Mousetrap.bind('x', function() {
    matrix1.matrix[3][1] = 1;
    console.log("x pressed");
});

Mousetrap.bind('c', function() {
    matrix1.matrix[3][2] = 1;
    console.log("c pressed");
});

Mousetrap.bind('v', function() {
    matrix1.matrix[3][3] = 1;
    console.log("v pressed");
});

Mousetrap.bind('b', function() {
    matrix1.matrix[3][4] = 1;
    console.log("b pressed");
});

Mousetrap.bind('n', function() {
    matrix1.matrix[3][5] = 1;
    console.log("n pressed");
});

Mousetrap.bind('m', function() {
    matrix1.matrix[3][6] = 1;
    console.log("m pressed");
});

Mousetrap.bind(',', function() {
    matrix1.matrix[3][7] = 1;
    console.log(", pressed");
});


//4 - !@#$%^&*
Mousetrap.bind('!', function() {
    matrix1.matrix[4][0] = 1;
    console.log("! pressed");
});

Mousetrap.bind('@', function() {
    matrix1.matrix[4][1] = 1;
    console.log("@ pressed");
});

Mousetrap.bind('#', function() {
    matrix1.matrix[4][2] = 1;
    console.log("# pressed");
});

Mousetrap.bind('$', function() {
    matrix1.matrix[4][3] = 1;
    console.log("$ pressed");
});

Mousetrap.bind('%', function() {
    matrix1.matrix[4][4] = 1;
    console.log("% pressed");
});

Mousetrap.bind('^', function() {
    matrix1.matrix[4][5] = 1;
    console.log("^ pressed");
});

Mousetrap.bind('&', function() {
    matrix1.matrix[4][6] = 1;
    console.log("& pressed");
});

Mousetrap.bind('*', function() {
    matrix1.matrix[4][7] = 1;
    console.log("* pressed");
});


//5 - QWERTYUI
Mousetrap.bind('Q', function() {
    matrix1.matrix[5][0] = 1;
    console.log("Q pressed");
});

Mousetrap.bind('W', function() {
    matrix1.matrix[5][1] = 1;
    console.log("W pressed");
});

Mousetrap.bind('E', function() {
    matrix1.matrix[5][2] = 1;
    console.log("E pressed");
});

Mousetrap.bind('R', function() {
    matrix1.matrix[5][3] = 1;
    console.log("R pressed");
});

Mousetrap.bind('T', function() {
    matrix1.matrix[5][4] = 1;
    console.log("T pressed");
});

Mousetrap.bind('Y', function() {
    matrix1.matrix[5][5] = 1;
    console.log("Y pressed");
});

Mousetrap.bind('U', function() {
    matrix1.matrix[5][6] = 1;
    console.log("U pressed");
});

Mousetrap.bind('I', function() {
    matrix1.matrix[5][7] = 1;
    console.log("I pressed");
});





//6 - ASDFGHKJ
Mousetrap.bind('A', function() {
    matrix1.matrix[6][0] = 1;
    console.log("A pressed");
});

Mousetrap.bind('S', function() {
    matrix1.matrix[6][1] = 1;
    console.log("S pressed");
});

Mousetrap.bind('D', function() {
    matrix1.matrix[6][2] = 1;
    console.log("D pressed");
});

Mousetrap.bind('F', function() {
    matrix1.matrix[6][3] = 1;
    console.log("F pressed");
});

Mousetrap.bind('G', function() {
    matrix1.matrix[6][4] = 1;
    console.log("G pressed");
});

Mousetrap.bind('H', function() {
    matrix1.matrix[6][5] = 1;
    console.log("H pressed");
});

Mousetrap.bind('J', function() {
    matrix1.matrix[6][6] = 1;
    console.log("J pressed");
});

Mousetrap.bind('K', function() {
    matrix1.matrix[6][7] = 1;
    console.log("K pressed");
});




//7 - ZXCVBNM<
Mousetrap.bind('Z', function() {
    matrix1.matrix[7][0] = 1;
    console.log("Z pressed");
});

Mousetrap.bind('X', function() {
    matrix1.matrix[7][1] = 1;
    console.log("X pressed");
});

Mousetrap.bind('C', function() {
    matrix1.matrix[7][2] = 1;
    console.log("C pressed");
});

Mousetrap.bind('V', function() {
    matrix1.matrix[7][3] = 1;
    console.log("V pressed");
});

Mousetrap.bind('B', function() {
    matrix1.matrix[7][4] = 1;
    console.log("B pressed");
});

Mousetrap.bind('N', function() {
    matrix1.matrix[7][5] = 1;
    console.log("N pressed");
});

Mousetrap.bind('M', function() {
    matrix1.matrix[7][6] = 1;
    console.log("M pressed");
});

Mousetrap.bind('<', function() {
    matrix1.matrix[7][7] = 1;
    console.log("< pressed");
});


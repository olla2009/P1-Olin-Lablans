let counter = 0;
let current_player = "X";
let winner = "none";
let winIndices = [];
let vsBot = false;

let square1 = "empty";
let square2 = "empty";
let square3 = "empty";
let square4 = "empty";
let square5 = "empty";
let square6 = "empty";
let square7 = "empty";
let square8 = "empty";
let square9 = "empty";

let text_size = 0;

// every square
let rectW_square = 100;
let rectH_square = 100;
let rounding = 20;

// top row squares (1,2,3)
let rectY_square_top = 225;
let rectX_square1 = 325;
let rectX_square2 = 450;
let rectX_square3 = 575;

// middle row (4,5,6)
let rectY_square_middle = 350;
let rectX_square4 = 325;
let rectX_square5 = 450;
let rectX_square6 = 575;

// bottom row (7,8,9)
let rectY_square_bottom = 475;
let rectX_square7 = 325;
let rectX_square8 = 450;
let rectX_square9 = 575;

let buttonW = 150;
let buttonH = 50;

//button 1
let buttonX = 325;
let buttonY = 720;

//button2
let button2_X = 525;
let button2_Y = 720;

function setup() {
  createCanvas(1100, 800);
}

function draw() {
  //functionality
  text_size += 0.05 * 2;

  // Loop back
  if (text_size > 20) {
    text_size = 0;
  }

  if (winner === "X") {
    background(100, 150, 255);
  } else if (winner === "O") {
    background(255, 100, 100);
  } else if (winner === "draw") {
    background(180);
  } else {
    background(20, 45, 30);
  }

  //casino sign
  push();
  noFill();
  stroke(97, 102, 106);
  strokeWeight(5);
  rect(400, 40, 200, 40);
  circle(600, 1, 20);
  circle(600, 20, 15);
  circle(600, 40, 20);
  circle(400, 1, 20);
  circle(400, 20, 15);
  circle(400, 40, 20);
  fill(150, 70, 30);
  rect(400, 40, 200, 40);
  textSize(35);
  textFont(ITALIC);
  stroke(0, 0, 0);
  text("Casino", 500, 60);
  pop();

  //players
  //player Blue
  noStroke();
  fill(0, 255, 255);
  circle(165, 400, 60);
  fill(0, 0, 0);
  circle(180, 410, 10);
  circle(180, 390, 10);
  //player Red
  fill(255, 0, 0);
  circle(835, 400, 60);
  fill(0, 0, 0);
  circle(825, 410, 10);
  circle(825, 390, 10);

  //Table
  fill(139, 69, 19);
  circle(500, 400, 600);
  fill(160, 80, 30);
  circle(500, 400, 580);
  fill(166, 25, 32);
  circle(500, 400, 540);

  // board
  fill(170, 30, 40, 100);
  rect(300, 200, 400, 400, 50);

  strokeWeight(4);
  fill(255);

  // squares
  push();
  strokeWeight(4);
  stroke(0, 0, 0, 200);

  if (square1 === "empty" && mouseX > rectX_square1 && mouseX < rectX_square1 + rectW_square && mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square1, rectY_square_top, rectW_square, rectH_square, rounding);
  if (square2 === "empty" && mouseX > rectX_square2 && mouseX < rectX_square2 + rectW_square && mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square2, rectY_square_top, rectW_square, rectH_square, rounding);
  if (square3 === "empty" && mouseX > rectX_square3 && mouseX < rectX_square3 + rectW_square && mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square3, rectY_square_top, rectW_square, rectH_square, rounding);
  if (square4 === "empty" && mouseX > rectX_square4 && mouseX < rectX_square4 + rectW_square && mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square4, rectY_square_middle, rectW_square, rectH_square, rounding);
  if (square5 === "empty" && mouseX > rectX_square5 && mouseX < rectX_square5 + rectW_square && mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square5, rectY_square_middle, rectW_square, rectH_square, rounding);
  if (square6 === "empty" && mouseX > rectX_square6 && mouseX < rectX_square6 + rectW_square && mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square6, rectY_square_middle, rectW_square, rectH_square, rounding);
  if (square7 === "empty" && mouseX > rectX_square7 && mouseX < rectX_square7 + rectW_square && mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square7, rectY_square_bottom, rectW_square, rectH_square, rounding);
  if (square8 === "empty" && mouseX > rectX_square8 && mouseX < rectX_square8 + rectW_square && mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square8, rectY_square_bottom, rectW_square, rectH_square, rounding);
  if (square9 === "empty" && mouseX > rectX_square9 && mouseX < rectX_square9 + rectW_square && mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square) {
    fill(235, 210, 210);
  } else {
    fill(255);
  }
  rect(rectX_square9, rectY_square_bottom, rectW_square, rectH_square, rounding);

  pop();

  textSize(80);
  textAlign(CENTER, CENTER);

  // top 
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(1) ? "gray" : "black");
  if (square1 !== "empty") text(square1, rectX_square1 + rectW_square / 2, rectY_square_top + rectH_square / 2);
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(2) ? "gray" : "black");
  if (square2 !== "empty") text(square2, rectX_square2 + rectW_square / 2, rectY_square_top + rectH_square / 2);
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(3) ? "gray" : "black");
  if (square3 !== "empty") text(square3, rectX_square3 + rectW_square / 2, rectY_square_top + rectH_square / 2);

  // middle
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(4) ? "gray" : "black");
  if (square4 !== "empty") text(square4, rectX_square4 + rectW_square / 2, rectY_square_middle + rectH_square / 2);
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(5) ? "gray" : "black");
  if (square5 !== "empty") text(square5, rectX_square5 + rectW_square / 2, rectY_square_middle + rectH_square / 2);
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(6) ? "gray" : "black");
  if (square6 !== "empty") text(square6, rectX_square6 + rectW_square / 2, rectY_square_middle + rectH_square / 2);

  // bottom
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(7) ? "gray" : "black");
  if (square7 !== "empty") text(square7, rectX_square7 + rectW_square / 2, rectY_square_bottom + rectH_square / 2);
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(8) ? "gray" : "black");
  if (square8 !== "empty") text(square8, rectX_square8 + rectW_square / 2, rectY_square_bottom + rectH_square / 2);
  fill(winner !== "none" && winner !== "draw" && !winIndices.includes(9) ? "gray" : "black");
  if (square9 !== "empty") text(square9, rectX_square9 + rectW_square / 2, rectY_square_bottom + rectH_square / 2);

  // shows players turn
  push();
  fill("black");
  textFont();
  textSize(10 + text_size);
  textAlign(CENTER, CENTER);
  if (winner === "X") {
    text("Speler X heeft gewonnen!", 500, 180);
  } else if (winner === "O") {
    text(vsBot ? "De bot heeft gewonnen!" : "Speler O heeft gewonnen!", 500, 180);
  } else if (winner === "draw") {
    text("Gelijkspel!", 500, 180);
  } else {
    let turnText = "speler " + current_player + " is aan de beurt";
    if (vsBot && current_player === "O") {
      turnText = "Bot is aan de beurt...";
    }
    text(turnText, 500, 180);
  }
  pop();

  fill(150, 70, 30);
  stroke(0);
  strokeWeight(3);
  rect(buttonX, buttonY, buttonW, buttonH, 15);

  fill(0);
  noStroke();
  textSize(20);
  textFont(ITALIC);
  textAlign(CENTER, CENTER);
  text("Nieuw spel", buttonX + buttonW / 2, buttonY + buttonH / 2);

  fill(150, 70, 30);
  stroke(0);
  strokeWeight(3);
  rect(button2_X, button2_Y, buttonW, buttonH, 15);

  fill(0);
  noStroke();
  textSize(20);
  textFont(ITALIC);
  textAlign(CENTER, CENTER);
  text("speel tegen bot", button2_X + buttonW / 2, button2_Y + buttonH / 2);
}

function mouseClicked() {
  //new game function
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
    resetGame();
    vsBot = false;
    return;
  }

  //if you click on speel tegen bot activates bot
  if (
    mouseX > button2_X &&
    mouseX < button2_X + buttonW &&
    mouseY > button2_Y &&
    mouseY < button2_Y + buttonH
  ) {
    resetGame();
    vsBot = true;
    return;
  }

  if (winner !== "none") return;


  if (vsBot && current_player === "O") return;

  let Move_made = false;

  // top squares
  if (square1 === "empty" && mouseX > rectX_square1 && mouseX < rectX_square1 + rectW_square && mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square) {
    square1 = current_player;
    Move_made = true;
  }
  if (square2 === "empty" && mouseX > rectX_square2 && mouseX < rectX_square2 + rectW_square && mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square) {
    square2 = current_player;
    Move_made = true;
  }
  if (square3 === "empty" && mouseX > rectX_square3 && mouseX < rectX_square3 + rectW_square && mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square) {
    square3 = current_player;
    Move_made = true;
  }

  // middle squares
  if (square4 === "empty" && mouseX > rectX_square4 && mouseX < rectX_square4 + rectW_square && mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square) {
    square4 = current_player;
    Move_made = true;
  }
  if (square5 === "empty" && mouseX > rectX_square5 && mouseX < rectX_square5 + rectW_square && mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square) {
    square5 = current_player;
    Move_made = true;
  }
  if (square6 === "empty" && mouseX > rectX_square6 && mouseX < rectX_square6 + rectW_square && mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square) {
    square6 = current_player;
    Move_made = true;
  }

  // bottom squares
  if (square7 === "empty" && mouseX > rectX_square7 && mouseX < rectX_square7 + rectW_square && mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square) {
    square7 = current_player;
    Move_made = true;
  }
  if (square8 === "empty" && mouseX > rectX_square8 && mouseX < rectX_square8 + rectW_square && mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square) {
    square8 = current_player;
    Move_made = true;
  }
  if (square9 === "empty" && mouseX > rectX_square9 && mouseX < rectX_square9 + rectW_square && mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square) {
    square9 = current_player;
    Move_made = true;
  }

  if (Move_made) {
    counter++;
    checkWin();

    if (winner === "none") {
      if (current_player === "X") {
        current_player = "O";
      } else {
        current_player = "X";
      }


      if (vsBot && current_player === "O" && winner === "none") {
        setTimeout(botMove, 300);
      }
    }
  }
}


function botMove() {
  if (winner !== "none") return;

  let emptySquares = [];
  if (square1 === "empty") emptySquares.push(1);
  if (square2 === "empty") emptySquares.push(2);
  if (square3 === "empty") emptySquares.push(3);
  if (square4 === "empty") emptySquares.push(4);
  if (square5 === "empty") emptySquares.push(5);
  if (square6 === "empty") emptySquares.push(6);
  if (square7 === "empty") emptySquares.push(7);
  if (square8 === "empty") emptySquares.push(8);
  if (square9 === "empty") emptySquares.push(9);


  if (emptySquares.length > 0) {
    let randomIndex = floor(random(emptySquares.length));
    let chosenSquare = emptySquares[randomIndex];

    if (chosenSquare === 1) square1 = "O";
    else if (chosenSquare === 2) square2 = "O";
    else if (chosenSquare === 3) square3 = "O";
    else if (chosenSquare === 4) square4 = "O";
    else if (chosenSquare === 5) square5 = "O";
    else if (chosenSquare === 6) square6 = "O";
    else if (chosenSquare === 7) square7 = "O";
    else if (chosenSquare === 8) square8 = "O";
    else if (chosenSquare === 9) square9 = "O";

    counter++;
    checkWin();
    if (winner === "none") {
      current_player = "X";
    }
  }
}

//Checks squares to see if there has won someone
function checkWin() {
  if (square1 !== "empty" && square1 === square2 && square2 === square3) { winner = square1; winIndices = [1, 2, 3]; }
  else if (square4 !== "empty" && square4 === square5 && square5 === square6) { winner = square4; winIndices = [4, 5, 6]; }
  else if (square7 !== "empty" && square7 === square8 && square8 === square9) { winner = square7; winIndices = [7, 8, 9]; }

  else if (square1 !== "empty" && square1 === square4 && square4 === square7) { winner = square1; winIndices = [1, 4, 7]; }
  else if (square2 !== "empty" && square2 === square5 && square5 === square8) { winner = square2; winIndices = [2, 5, 8]; }
  else if (square3 !== "empty" && square3 === square6 && square6 === square9) { winner = square3; winIndices = [3, 6, 9]; }

  else if (square1 !== "empty" && square1 === square5 && square5 === square9) { winner = square1; winIndices = [1, 5, 9]; }
  else if (square3 !== "empty" && square3 === square5 && square5 === square7) { winner = square3; winIndices = [3, 5, 7]; }

  else if (counter === 9) {
    winner = "draw";
  }
}

function resetGame() {
  counter = 0;
  current_player = "X";
  winner = "none";
  winIndices = [];
  square1 = "empty";
  square2 = "empty";
  square3 = "empty";
  square4 = "empty";
  square5 = "empty";
  square6 = "empty";
  square7 = "empty";
  square8 = "empty";
  square9 = "empty";
}
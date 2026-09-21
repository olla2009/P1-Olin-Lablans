//variabelen
let text_size = 0;

//every square
let rectW_square = 100;
let rectH_square = 100;
let rounding = 10;

//top row squares(1,2,3)
let rectY_square_top = 120;
let rectX_square1 = 80;
let rectX_square2 = 200;
let rectX_square3 = 320;

//middle row(4,5,6)
let rectY_square_middle = 240;
let rectX_square4 = 80;
let rectX_square5 = 200;
let rectX_square6 = 320;

//bottom row(7,8,9)
let rectY_square_bottom = 360;
let rectX_square7 = 80;
let rectX_square8 = 200;
let rectX_square9 = 320;



function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(240);

  //bord 
  fill(0, 0, 0)
  rect(50, 100, 400, 400, 50)


  //functionality
  text_size += 0.1 * 2;

  // Loop back
  if (text_size > 40) {
    text_size = 0;
  }


  //square 1
  if (
    mouseX > rectX_square1 && mouseX < rectX_square1 + rectW_square &&
    mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square1, rectY_square_top, rectW_square, rectH_square, rounding);


  //square 2
  if (
    mouseX > rectX_square2 && mouseX < rectX_square2 + rectW_square &&
    mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square2, rectY_square_top, rectW_square, rectH_square, rounding);

  //square 3
  if (
    mouseX > rectX_square3 && mouseX < rectX_square3 + rectW_square &&
    mouseY > rectY_square_top && mouseY < rectY_square_top + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square3, rectY_square_top, rectW_square, rectH_square, rounding);

  //square 4
  if (
    mouseX > rectX_square4 && mouseX < rectX_square4 + rectW_square &&
    mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square4, rectY_square_middle, rectW_square, rectH_square, rounding);

  //square 5
  if (
    mouseX > rectX_square5 && mouseX < rectX_square5 + rectW_square &&
    mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square5, rectY_square_middle, rectW_square, rectH_square, rounding);


  //square 6
  if (
    mouseX > rectX_square6 && mouseX < rectX_square6 + rectW_square &&
    mouseY > rectY_square_middle && mouseY < rectY_square_middle + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square6, rectY_square_middle, rectW_square, rectH_square, rounding);


  //square7
  if (
    mouseX > rectX_square7 && mouseX < rectX_square7 + rectW_square &&
    mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square7, rectY_square_bottom, rectW_square, rectH_square, rounding);

  //square8
  if (
    mouseX > rectX_square8 && mouseX < rectX_square8 + rectW_square &&
    mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square8, rectY_square_bottom, rectW_square, rectH_square, rounding);

  //square9
  if (
    mouseX > rectX_square9 && mouseX < rectX_square9 + rectW_square &&
    mouseY > rectY_square_bottom && mouseY < rectY_square_bottom + rectH_square && mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(160);
  }
  rect(rectX_square9, rectY_square_bottom, rectW_square, rectH_square, rounding);


  push()
  fill(255, 0, 0)
  textStyle(ITALIC);
  textSize(10 + text_size)
  text("speler rood", 100, 50)
  pop()


  circle(mouseX, mouseY, 15);
}

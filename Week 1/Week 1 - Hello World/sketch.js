function setup() {

  createCanvas(1400, 1400);
}
//naam
function draw() {
  fill("black")
  textSize(15)
  text("olin", 50, 50);
  text("1.", 20, 50);

  //vlag NL
  text("2.", 20, 130)
  fill("red")
  rect(40, 100, 100, 20)
  fill("white")
  rect(40, 120, 100, 20)
  fill("blue")
  rect(40, 140, 100, 20)

  // Schaakbord 
  fill("black");
  text("3.", 20, 200);


  fill("black");
  square(40, 180, 99);

  fill("white");
  square(73, 180, 33);
  square(40, 213, 33);
  square(106, 213, 33);
  square(73, 246, 33);

  //huis
  fill("black")
  text("4.", 20, 400)
  fill("black")
  noFill()
  push();
  translate(40, 300);
  triangle(20, 75, 58, 20, 86, 75);
  pop();
  square(60, 375, 65)

  //stoplicht
  fill("black")
  text("5.", 220, 70)
  fill("grey")
  rect(250, 20, 40, 120)
  rect(260, 140, 20, 80)
  fill("lightblue")
  circle(270, 40, 30)
  fill("orange")
  circle(270, 80, 30)
  fill("green")
  circle(270, 40 * 3, 30)

  //dobbelsteen
  fill("black")
  square(240, 280, 80)
  fill("white")
  square(245, 285, 70)
  fill("black")
  circle(300, 340, 20)
  circle(300, 300, 20)
  circle(260, 300, 20)
  circle(260, 340, 20)
  text("6.", 220, 300)
}

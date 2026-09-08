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
  noStroke()
  fill("black")
  text("5.", 220, 70)
  fill("grey")
  rect(250, 20, 40, 120)
  rect(260, 140, 20, 80)
  fill("red")
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

  //packman
  text("7. pacman", 350, 325)
  push();
  translate(350, 200);

  //zwart 
  fill("black")
  rect(200, 20, 60, 10)
  rect(170, 30, 30, 10)
  rect(140, 40, 30, 10)
  rect(130, 50, 10, 10)
  rect(120, 60, 10, 20)
  rect(110, 80, 10, 20)
  rect(100, 100, 10, 60)
  rect(110, 160, 10, 20)
  rect(120, 180, 10, 20)
  rect(130, 200, 10, 10)
  rect(140, 210, 20, 10)
  rect(160, 220, 20, 10)
  rect(180, 230, 50, 10)
  rect(230, 220, 20, 10)
  rect(250, 210, 20, 10)
  rect(270, 200, 10, 10)
  rect(280, 190, 10, 10)
  rect(260, 180, 20, 10)
  rect(240, 170, 20, 10)
  rect(220, 160, 20, 10)
  rect(210, 150, 20, 10)
  rect(230, 140, 20, 10)
  rect(250, 130, 20, 10)
  rect(270, 120, 20, 10)
  rect(290, 110, 20, 10)
  rect(310, 90, 10, 20)
  rect(300, 70, 10, 20)
  rect(290, 60, 10, 10)
  rect(270, 50, 20, 10)
  rect(270, 50, 20, 10)
  rect(260, 30, 10, 20)

  //geel
  fill("yellow")
  rect(200, 30, 60, 10)
  rect(170, 40, 90, 10)
  rect(140, 50, 130, 10)
  rect(130, 60, 160, 10)
  rect(130, 70, 170, 10)
  rect(120, 80, 180, 10)
  rect(120, 90, 190, 10)
  rect(120, 90, 190, 10)
  rect(110, 100, 200, 10)
  rect(110, 110, 180, 10)
  rect(110, 120, 160, 10)
  rect(110, 130, 140, 10)
  rect(110, 140, 120, 10)
  rect(110, 150, 100, 10)
  rect(120, 160, 100, 10)
  rect(120, 160, 100, 10)
  rect(120, 170, 120, 10)
  rect(120, 170, 120, 10)
  rect(130, 180, 130, 10)
  rect(130, 190, 150, 10)
  rect(140, 200, 130, 10)
  rect(160, 210, 90, 10)
  rect(180, 220, 50, 10)


  //wit
  fill("white")
  rect(210, 60, 20, 20)

  //zwart voor oog
  fill("black")
  rect(220, 70, 10, 10)


  pop();

  text("8. mario", 400, 50)
  //mario
  push();
  translate(0, -80);

  //rood
  fill(255, 0, 0)
  rect(500, 100, 60, 10)
  rect(490, 110, 90, 10)
  rect(490, 110, 90, 10)
  rect(490, 170, 70, 10)
  rect(480, 180, 100, 10)
  rect(480, 180, 100, 10)
  rect(470, 190, 120, 10)
  rect(490, 200, 80, 10)

  //huidskleur
  fill(255, 200, 160)
  rect(520, 120, 30, 10)
  rect(550, 130, 30, 10)
  rect(560, 140, 30, 10)
  rect(540, 140, 10, 10)
  rect(520, 120, 20, 40)
  rect(520, 120, 20, 40)
  rect(490, 130, 10, 30)
  rect(510, 130, 10, 10)
  rect(500, 150, 20, 10)
  rect(500, 160, 80, 10)
  rect(470, 200, 20, 30)
  rect(570, 200, 20, 30)
  rect(490, 210, 80, 10)

  //bruin
  fill(152, 64, 56)
  rect(490, 120, 30, 10)
  rect(480, 130, 10, 30)
  rect(490, 150, 10, 10)
  rect(500, 130, 10, 10)
  rect(500, 140, 20, 10)
  rect(480, 240, 30, 10)
  rect(470, 250, 40, 10)
  rect(550, 240, 30, 10)
  rect(550, 250, 40, 10)

  //blauw
  fill(0, 0, 255)
  rect(510, 170, 10, 30)
  rect(510, 200, 40, 10)
  rect(540, 190, 10, 10)
  rect(500, 210, 60, 20)
  rect(490, 220, 30, 20)
  rect(540, 220, 30, 20)

  //zwart
  fill(0, 0, 0)
  rect(540, 120, 10, 20)
  rect(550, 140, 10, 10)
  rect(540, 150, 40, 10)

  //geel
  fill(255, 255, 0)
  rect(510, 210, 10, 10)
  rect(540, 210, 10, 10)
}

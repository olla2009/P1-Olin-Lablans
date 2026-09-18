//variabelen
let rectX = 100;
let rectY = 100;
let rectW = 200;
let rectH = 100;


function setup() {
  createCanvas(500, 600);
}

function draw() {
  //functionaliteit
  background(240);










  //bord
  fill(0, 0, 0)
  rect(50, 100, 400, 400, 50)

  //vakjes van het bord
  fill(160, 160, 160)

  //vakjes boven 
  rect(80, 120, 100, 100, 10)
  rect(200, 120, 100, 100, 10)
  rect(320, 120, 100, 100, 10)

  //vakjes midden
  rect(80, 240, 100, 100, 10)
  rect(200, 240, 100, 100, 10)
  rect(320, 240, 100, 100, 10)

  //vakjes onder
  rect(80, 360, 100, 100, 10)
  rect(200, 360, 100, 100, 10)
  rect(320, 360, 100, 100, 10)

  circle(mouseX, mouseY, 30);
}

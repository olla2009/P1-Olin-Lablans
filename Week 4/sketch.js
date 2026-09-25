//variables
let visibility = 0;



function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);
  visibility = visibility + 0.9
  if (visibility > 180) {
    visibility = -0;
  }

  beginShape(QUADS);
  fill(255, 0, 0, visibility)
  vertex(100, 120);
  vertex(200, 220);
  vertex(300, 100);
  vertex(200, 50);
  endShape(CLOSE);

}

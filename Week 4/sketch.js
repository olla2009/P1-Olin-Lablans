//Universal variables
let RandomRed = [];
let RandomGreen = [];
let RandomBlue = [];
let invisibility = [];
let Speed = [];


//Random Circles
let CirclePositionX = [];
let CirclePositionY = [];
let CircleSize = [];


//Random Square
let SquarePositionX = [];
let SquarePositionY = [];
let SquareSize = [];



//Random Ellipse
let EllipsePositionX = [];
let EllipsePositionY = [];
let EllipseHeight = [];
let EllipseWidth = [];

//Random Rectangle
let RectPositionX = [];
let RectPositionY = [];
let RectHeight = [];
let RectWidth = [];


// no array variables
let quantity = 0;
let MinQuantity = 115;
let MaxQuantity = 115;
let TimeCapturing = 5
let IsCapturing = false

function setup() {
  createCanvas(800, 600,);
  quantity = floor(random(MinQuantity, MaxQuantity));
  noCursor()

  for (let i = 0; i < quantity; i = i + 1) {
    RandomRed.push(floor(random(0, 255)));
    RandomGreen.push(floor(random(0, 255)));
    RandomBlue.push(floor(random(0, 255)));
    invisibility.push(floor(random(150, 255)));
    Speed.push(random(1, 5));


    CirclePositionX.push(random(0, 800));
    CirclePositionY.push(random(0, 800));
    CircleSize.push(random(20, 70));


    SquarePositionX.push(random(0, 800));
    SquarePositionY.push(random(0, 800));
    SquareSize.push(random(20, 70));

    EllipsePositionX.push(random(0, 800));
    EllipsePositionY.push(random(0, 800));
    EllipseWidth.push(random(20, 70));
    EllipseHeight.push(random(20, 70));

    RectPositionX.push(random(0, 800));
    RectPositionY.push(random(0, 800));
    RectWidth.push(random(20, 70));
    RectHeight.push(random(20, 70));



  }
}

function draw() {
  background(0);

  for (let i = 0; i < quantity; i++) {
    fill(RandomRed[i], RandomGreen[i], RandomBlue[i], invisibility[i]);


    CirclePositionY[i] -= Speed[i]
    SquarePositionY[i] -= Speed[i]
    EllipsePositionY[i] -= Speed[i]
    RectPositionY[i] -= Speed[i]


    if (CirclePositionY[i] < -CircleSize[i]) {
      CirclePositionY[i] = height + CircleSize[i];
    }

    if (SquarePositionY[i] < -SquareSize[i]) {
      SquarePositionY[i] = height + SquareSize[i];
    }

    if (EllipsePositionY[i] < -EllipseHeight[i]) {
      EllipsePositionY[i] = height + EllipseHeight[i];
    }

    if (RectPositionY[i] < -RectHeight[i]) {
      RectPositionY[i] = height + RectHeight[i];
    }


    circle(CirclePositionX[i], CirclePositionY[i], CircleSize[i]);
    square(SquarePositionX[i], SquarePositionY[i], SquareSize[i]);
    ellipse(EllipsePositionX[i], EllipsePositionY[i], EllipseHeight[i], EllipseWidth[i])
    rect(RectPositionX[i], RectPositionY[i], RectHeight[i], RectWidth[i])
  }




  if (IsCapturing == false) {

    for (let i = 0; i < quantity; i++) {
      fill(RandomRed[i], RandomGreen[i], RandomBlue[i], invisibility[i]);
      circle(mouseX, mouseY, CircleSize[i]);
    }
    push();
    textSize(25);
    textStyle(BOLDITALIC)
    fill(255, 255, 255);
    text("press N for new art", 10, 10, 300, 100);
    text("Press S to create a GIF (may take up to 30 seconds)", 10, 540, 400, 100);
    pop();
  }



}

function keyPressed() {
  if (keyCode == 78) {
    RandomGreen = [];
    RandomBlue = [];
    RandomRed = [];
    invisibility = [];
    Speed = [];

    CirclePositionX = [];
    CirclePositionY = [];
    CircleSize = [];


    SquarePositionX = [];
    SquarePositionY = [];
    SquareSize = [];

    EllipsePositionX = [];
    EllipsePositionY = [];
    EllipseHeight = [];
    EllipseWidth = [];

    RectPositionX = [];
    RectPositionY = [];
    RectHeight = [];
    RectWidth = [];


    quantity = floor(random(MinQuantity, MaxQuantity));

    for (let i = 0; i < quantity; i = i + 1) {
      RandomRed.push(floor(random(0, 255)));
      RandomGreen.push(floor(random(0, 255)));
      RandomBlue.push(floor(random(0, 255)));
      invisibility.push(floor(random(150, 255)));
      Speed.push(random(1, 5));

      CirclePositionX.push(random(0, 800));
      CirclePositionY.push(random(0, 800));
      CircleSize.push(random(20, 70));

      SquarePositionX.push(random(0, 800));
      SquarePositionY.push(random(0, 800));
      SquareSize.push(random(20, 70));

      EllipsePositionX.push(random(0, 800));
      EllipsePositionY.push(random(0, 800));
      EllipseWidth.push(random(20, 70));
      EllipseHeight.push(random(20, 70));

      RectPositionX.push(random(0, 800));
      RectPositionY.push(random(0, 800));
      RectWidth.push(random(20, 70));
      RectHeight.push(random(20, 70));

    }
  }
  if (key == 's' || key == 'S') {
    IsCapturing = true
    setTimeout(stopCapturing, TimeCapturing * 1000)
    saveGif('animation.gif', TimeCapturing, { silent: true });
  }
}

function stopCapturing() {
  IsCapturing = false;
}

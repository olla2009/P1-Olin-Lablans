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

//Random Triangle
let SizeOFTriangle = 100;
let TrianglePositionX = [];
let TrianglePositionY = [];
let TrianglePointX1 = [];
let TrianglePointY1 = [];
let TrianglePointX2 = [];
let TrianglePointY2 = [];
let TrianglePointX3 = [];
let TrianglePointY3 = [];

//Random Text
let myWords = ["art", "code", "p5.js", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let myFonts = ['Courier New', 'Arial', 'Georgia', 'Times New Roman', 'Comic Sans MS'];
let TextPositionX = [];
let TextPositionY = [];
let TextContent = [];
let TextSizeArray = [];
let TextFontArray = [];

// no array variables
let quantity = 0;
let MinQuantity = 65;
let MaxQuantity = 65;
let TimeCapturing = 5;
let IsCapturing = false;
let MaxWidth = 1000;
let MaxHeight = 800;
let RectShapeScale = 1.0;

function setup() {
  createCanvas(1000, 700);
  quantity = floor(random(MinQuantity, MaxQuantity));
  noCursor();
  ResetSketch();
}

function draw() {
  background(0);

  // Draws the shapes and text with the times of quantity
  for (let i = 0; i < quantity; i++) {
    fill(RandomRed[i], RandomGreen[i], RandomBlue[i], invisibility[i]);
    noStroke();

    CirclePositionY[i] -= Speed[i];
    SquarePositionY[i] -= Speed[i];
    EllipsePositionY[i] -= Speed[i];
    RectPositionY[i] -= Speed[i];
    TrianglePositionY[i] -= Speed[i];
    TextPositionY[i] -= Speed[i];

    if (CirclePositionY[i] < -CircleSize[i]) {
      CirclePositionY[i] = MaxHeight + CircleSize[i];
    }
    if (SquarePositionY[i] < -SquareSize[i]) {
      SquarePositionY[i] = MaxHeight + SquareSize[i];
    }
    if (EllipsePositionY[i] < -EllipseHeight[i]) {
      EllipsePositionY[i] = MaxHeight + EllipseHeight[i];
    }
    if (RectPositionY[i] < -RectHeight[i]) {
      RectPositionY[i] = MaxHeight + RectHeight[i];
    }
    if (TrianglePositionY[i] < -50) {
      TrianglePositionY[i] = MaxHeight + 50;
    }
    if (TextPositionY[i] < -100) {
      TextPositionY[i] = MaxHeight + 100;
    }

    circle(CirclePositionX[i], CirclePositionY[i], CircleSize[i]);
    square(SquarePositionX[i], SquarePositionY[i], SquareSize[i]);
    ellipse(EllipsePositionX[i], EllipsePositionY[i], EllipseWidth[i], EllipseHeight[i]);
    rect(RectPositionX[i], RectPositionY[i], RectWidth[i], RectHeight[i]);

    triangle(
      TrianglePositionX[i] + TrianglePointX1[i] * RectShapeScale, TrianglePositionY[i] + TrianglePointY1[i] * RectShapeScale,
      TrianglePositionX[i] + TrianglePointX2[i] * RectShapeScale, TrianglePositionY[i] + TrianglePointY2[i] * RectShapeScale,
      TrianglePositionX[i] + TrianglePointX3[i] * RectShapeScale, TrianglePositionY[i] + TrianglePointY3[i] * RectShapeScale
    );

    push();
    textFont(TextFontArray[i]);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    textSize(TextSizeArray[i]);
    text(TextContent[i], TextPositionX[i], TextPositionY[i]);
    pop();
  }

  // Disables the Text and shapes when making the GIF
  if (IsCapturing == false) {
    for (let i = 0; i < quantity; i++) {
      fill(RandomRed[i], RandomGreen[i], RandomBlue[i], invisibility[i]);
      circle(mouseX, mouseY, CircleSize[i]);
    }

    fill(0);
    noStroke();
    rect(0, 600, 1000, 100);

    push();
    textSize(15);
    textStyle(BOLDITALIC);
    textFont('Arial');
    fill(255, 255, 255);
    text("press N for new art", 20, 645);
    text("Press Backspace to give shapes a different color", 240, 635, 250, 100);
    text("Press UP / DOWN ARROW to resize all rectangles", 520, 635, 250, 100);
    text("Press S to create a GIF", 800, 635, 180, 100);
    pop();
  }
}

function keyPressed() {

  // resets the arrays
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

    TrianglePositionX = [];
    TrianglePositionY = [];
    TrianglePointX1 = [];
    TrianglePointY1 = [];
    TrianglePointX2 = [];
    TrianglePointY2 = [];
    TrianglePointX3 = [];
    TrianglePointY3 = [];

    TextPositionX = [];
    TextPositionY = [];
    TextContent = [];
    TextSizeArray = [];
    TextFontArray = [];

    // resets the quantity
    quantity = floor(random(MinQuantity, MaxQuantity));

    // sets new random values for the arrays
    ResetSketch();
  }

  // starts capturing the GIF when pressed S
  if (key == 's' || key == 'S') {
    IsCapturing = true;
    setTimeout(stopCapturing, TimeCapturing * 1000);
    saveGif('animation.gif', TimeCapturing, { silent: true });
  }

  // changes the color of the shapes when pressed Backspace
  if (key == 'backspace' || key == 'Backspace') {
    RandomGreen = [];
    RandomBlue = [];
    RandomRed = [];

    for (let i = 0; i < quantity; i = i + 1) {
      RandomRed.push(floor(random(0, 255)));
      RandomGreen.push(floor(random(0, 255)));
      RandomBlue.push(floor(random(0, 255)));
    }
  }

  //Scales the triangles
  if (keyCode === UP_ARROW) {
    RectShapeScale += 0.1;
  } else if (keyCode === DOWN_ARROW) {
    RectShapeScale = max(0.1, RectShapeScale - 0.1);
  }
}

function stopCapturing() {
  IsCapturing = false;
}



// Reset the sketch with new random values
function ResetSketch() {
  for (let i = 0; i < quantity; i = i + 1) {
    RandomRed.push(floor(random(0, 255)));
    RandomGreen.push(floor(random(0, 255)));
    RandomBlue.push(floor(random(0, 255)));
    invisibility.push(floor(random(150, 255)));
    Speed.push(random(1, 5));

    CirclePositionX.push(random(0, MaxWidth));
    CirclePositionY.push(random(0, MaxHeight));
    CircleSize.push(random(20, 70));

    SquarePositionX.push(random(0, MaxWidth));
    SquarePositionY.push(random(0, MaxHeight));
    SquareSize.push(random(20, 70));

    EllipsePositionX.push(random(0, MaxWidth));
    EllipsePositionY.push(random(0, MaxHeight));
    EllipseWidth.push(random(20, 70));
    EllipseHeight.push(random(20, 70));

    RectPositionX.push(random(0, MaxWidth));
    RectPositionY.push(random(0, MaxHeight));
    RectWidth.push(random(20, 70));
    RectHeight.push(random(20, 70));

    TrianglePositionX.push(random(0, MaxWidth));
    TrianglePositionY.push(random(0, MaxHeight));
    TrianglePointX1.push(random(-SizeOFTriangle, SizeOFTriangle));
    TrianglePointY1.push(random(-SizeOFTriangle, SizeOFTriangle));
    TrianglePointX2.push(random(-SizeOFTriangle, SizeOFTriangle));
    TrianglePointY2.push(random(-SizeOFTriangle, SizeOFTriangle));
    TrianglePointX3.push(random(-SizeOFTriangle, SizeOFTriangle));
    TrianglePointY3.push(random(-SizeOFTriangle, SizeOFTriangle));

    TextPositionX.push(random(0, MaxWidth));
    TextPositionY.push(random(0, MaxHeight));
    TextContent.push(random(myWords));
    TextSizeArray.push(random(10, 30));
    TextFontArray.push(random(myFonts));
  }
}

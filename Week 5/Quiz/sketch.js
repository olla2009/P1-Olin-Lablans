//Buttons
let ButtonA
let ButtonB
let ButtonC
let ButtonD

//Button style
let WidthButton = 80;
let HeightButton = 20;

//Questions
let vraag1 = 'Hoe duur is Row-Bow'

//Answers
let AnswerA = '450-500'
let AnswerB = '200-300'
let AnswerC = '10-30'
let AnswerD = '50-100'

//Images
let img1


//sounds
let RowBowSound;

//images
function preload() {
  img1 = loadImage('/Week 5/assets/Row-Bow.png');
}


function setup() {
  createCanvas(800, 600);
  vragenSetup()
  img1.resize(400, 400);
  RowBowSound = loadSound('/Week 5/assets/Row-Bow sound.mp3');
}

function draw() {
  background(200);
  textAlign(CENTER, CENTER)
  textSize(20)
  textFont(ITALIC)
  text(vraag1, 350, 20)
  image(img1, 150, 50);
  imageMode(BOTTOM, CENTER)

}

function mousePressed() {
  // playing a sound file on a user gesture is equivalent to `userStartAudio()`
  RowBowSound.play();
}

function WrongAnswers() {
  console.log("incorrect")
  ButtonB.style('background-color', '#af4c4c');
  ButtonC.style('background-color', '#af4c4c');
  ButtonD.style('background-color', '#af4c4c');
}

function RightAnswer() {
  console.log("correct")
  ButtonA.style('background-color', '#4CAF50');
}








function vragenSetup() {
  ButtonA = createButton(AnswerA);
  ButtonA.position(250, 500)
  ButtonA.style('background-color', '#00f7ff');
  ButtonA.style('color', '#3700ff');
  ButtonA.style('font-family', 'serif')
  ButtonA.size(WidthButton, HeightButton)
  ButtonA.mousePressed(RightAnswer)

  ButtonB = createButton(AnswerB);
  ButtonB.position(400, 500)
  ButtonB.style('background-color', '#00f7ff');
  ButtonB.style('color', '#3700ff');
  ButtonB.style('font-family', 'serif')
  ButtonB.size(WidthButton, HeightButton)
  ButtonB.mousePressed(WrongAnswers)

  ButtonC = createButton(AnswerC);
  ButtonC.position(250, 570)
  ButtonC.style('background-color', '#00f7ff');
  ButtonC.style('color', '#3700ff');
  ButtonC.style('font-family', 'serif')
  ButtonC.size(WidthButton, HeightButton)
  ButtonC.mousePressed(WrongAnswers)

  ButtonD = createButton(AnswerD);
  ButtonD.position(400, 570)
  ButtonD.style('background-color', '#00f7ff');
  ButtonD.style('color', '#3700ff');
  ButtonD.style('font-family', 'serif')
  ButtonD.size(WidthButton, HeightButton)
  ButtonD.mousePressed(WrongAnswers)
}
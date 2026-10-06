//Buttons
let ButtonA
let ButtonB
let ButtonC
let ButtonD
let ButtonNext

//Button style

//abcd question buttons
let WidthButton = 80;
let HeightButton = 60;
let ButtonPositionY = 545;

//Next question button
let WidthButton2 = 100;
let HeightButton2 = 40;

//Questions
let Questions = [];
Questions.push('Hoe duur is Row-Bow')
Questions.push('welke skylander heeft de meest serie varianten')
Questions.push('Wie is deze skylander')
Questions.push('welke skylander van SSA heeft de minste varianten')
Questions.push('Hoeveel elementen zijn er in totaal in de lore?')
Questions.push('Wie is deze skylander')
Questions.push('Welk element is dit')
Questions.push('wie is deze schurk uit skylanders')
Questions.push('Hoeveel Skylanders-consolegames zijn er')
Questions.push('Wat is het allereerste Skylanders-spel dat uitkwam op de consoles?')

//to next question
let CurrentQuestion = 0;



//Answers (A is always the right answer B C D are fill ups)
let AnswerA = []
let AnswerB = []
let AnswerC = []
let AnswerD = []

//function I have every possible answer in
Answers()


//Images
let QuizImages = []


//sounds
let RowBowSound;

//images
function preload() {
  QuizImages.push(loadImage('/Week 5/assets/Row-Bow.png'));
  QuizImages.push(loadImage('/Week 5/assets/vraag2.png'));
  QuizImages.push(loadImage('/Week 5/assets/ThumpbackBlack-out.png'));
  QuizImages.push(loadImage('/Week 5/assets/vraag4.png'));
  QuizImages.push(loadImage('/Week 5/assets/Ellementen.png'));
  QuizImages.push(loadImage('/Week 5/assets/Flashwing Black-out.png'));
  QuizImages.push(loadImage('/Week 5/assets/pandergast ellement.png'));
  QuizImages.push(loadImage('/Week 5/assets/Kaos.png'));
  QuizImages.push(loadImage('/Week 5/assets/skylandersDVD.png'));



}


function setup() {
  createCanvas(800, 600);
  vragenSetup();
  QuizImages[CurrentQuestion].resize(400, 400);
  //RowBowSound = loadSound('/Week 5/assets/Row-Bow sound.mp3');
  randomiseknoppen();
}

function randomiseknoppen() {
  let array_posities = [225, 315, 405, 495];
  array_posities = shuffle(array_posities);
  console.log(array_posities);
  ButtonA.position(array_posities[0], ButtonPositionY);
  ButtonB.position(array_posities[1], ButtonPositionY);
  ButtonC.position(array_posities[2], ButtonPositionY);
  ButtonD.position(array_posities[3], ButtonPositionY);
}

function draw() {
  background(200);
  textAlign(CENTER, CENTER);
  textSize(20);
  textFont(ITALIC);
  text(Questions[CurrentQuestion], width / 2, 30);

  if (QuizImages[CurrentQuestion]) {
    imageMode(CENTER);
    image(QuizImages[CurrentQuestion], width / 2, height / 2, 400, 400);
  }
}

function mousePressed() {
  RowBowSound.play();
}


function WrongAnswers() {
  console.log("incorrect");
  ButtonA.style('background-color', '#00ff08');
  ButtonB.style('background-color', '#ff0000');
  ButtonC.style('background-color', '#ff0000');
  ButtonD.style('background-color', '#ff0000');
}

function RightAnswer() {
  console.log("correct");
  ButtonA.style('background-color', '#00ff08');
  ButtonB.style('background-color', '#ff0000');
  ButtonC.style('background-color', '#ff0000');
  ButtonD.style('background-color', '#ff0000');
}


function NextQuestion() {
  randomiseknoppen();
  if (CurrentQuestion < Questions.length - 1) {
    CurrentQuestion = CurrentQuestion + 1;
    updateVragen();
  } else {
    console.log("Einde van de quiz!");
  }
}


function updateVragen() {
  ButtonA.html(AnswerA[CurrentQuestion]);
  ButtonB.html(AnswerB[CurrentQuestion]);
  ButtonC.html(AnswerC[CurrentQuestion]);
  ButtonD.html(AnswerD[CurrentQuestion]);

  ButtonA.style('background-color', '#00f7ff');
  ButtonB.style('background-color', '#00f7ff');
  ButtonC.style('background-color', '#00f7ff');
  ButtonD.style('background-color', '#00f7ff');
}


function vragenSetup() {
  ButtonA = createButton(AnswerA[CurrentQuestion]);
  ButtonA.style('background-color', '#00f7ff');
  ButtonA.style('color', '#3700ff');
  ButtonA.style('font-family', 'serif');
  ButtonA.size(WidthButton, HeightButton);
  ButtonA.mousePressed(RightAnswer);

  ButtonB = createButton(AnswerB[CurrentQuestion]);
  ButtonB.style('background-color', '#00f7ff');
  ButtonB.style('color', '#3700ff');
  ButtonB.style('font-family', 'serif');
  ButtonB.size(WidthButton, HeightButton);
  ButtonB.mousePressed(WrongAnswers);

  ButtonC = createButton(AnswerC[CurrentQuestion]);
  ButtonC.style('background-color', '#00f7ff');
  ButtonC.style('color', '#3700ff');
  ButtonC.style('font-family', 'serif');
  ButtonC.size(WidthButton, HeightButton);
  ButtonC.mousePressed(WrongAnswers);

  ButtonD = createButton(AnswerD[CurrentQuestion]);
  ButtonD.style('background-color', '#00f7ff');
  ButtonD.style('color', '#3700ff');
  ButtonD.style('font-family', 'serif');
  ButtonD.size(WidthButton, HeightButton);
  ButtonD.mousePressed(WrongAnswers);

  //Next question button
  ButtonNext = createButton("Next question");
  ButtonNext.position(20, 560);
  ButtonNext.style('background-color', '#00f7ff');
  ButtonNext.style('color', '#3700ff');
  ButtonNext.style('font-family', 'serif');
  ButtonNext.size(WidthButton2, HeightButton2);
  ButtonNext.mousePressed(NextQuestion);
}

function Answers() {
  //Answers forA
  AnswerA.push('450-500')
  AnswerA.push('Gill Grunt')
  AnswerA.push('Thumpback')
  AnswerA.push('Sunburn')
  AnswerA.push('16')
  AnswerA.push('Flashwing')
  AnswerA.push('Pandergast')
  AnswerA.push('Kaos')
  AnswerA.push('6')
  AnswerA.push('Skylanders: Spyros Adventure')

  //Answers for B
  AnswerB.push('200-300')
  AnswerB.push('Eruptor')
  AnswerB.push('Tree Rex')
  AnswerB.push('Ghost Roaster')
  AnswerB.push('8')
  AnswerB.push('Whirlwind')
  AnswerB.push('Vuur')
  AnswerB.push('Golden Queen')
  AnswerB.push('8')
  AnswerB.push('Skylanders: Swap Force')

  //Answers for C
  AnswerC.push('10-30')
  AnswerC.push('Stealth Elf')
  AnswerC.push('Crusher')
  AnswerC.push('Dino-Rang')
  AnswerC.push('10')
  AnswerC.push('Cynder')
  AnswerC.push('Aarde')
  AnswerC.push('Chompy Mage')
  AnswerC.push('10')
  AnswerC.push('Skylanders: Giants')


  //Answers for D
  AnswerD.push('50-100')
  AnswerD.push('Trigger Happy')
  AnswerD.push('Eye-Brawl')
  AnswerD.push('Boomer')
  AnswerD.push('12')
  AnswerD.push('Sunburn')
  AnswerD.push('Magie')
  AnswerD.push('Buzzer Beak')
  AnswerD.push('3')
  AnswerD.push('Skylanders: Trap Team')


}